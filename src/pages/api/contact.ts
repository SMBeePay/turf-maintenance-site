import type { APIRoute } from 'astro';
import { EMAIL } from '../../lib/site.js';

// Renders on-demand (a real serverless function on Vercel) instead of being
// prerendered like every other page on this site — see astro.config.mjs.
export const prerender = false;

const FIELD_LABELS: Record<string, string> = {
	firstName: 'First name',
	lastName: 'Last name',
	email: 'Email',
	phone: 'Phone',
	organization: 'Organization/Facility',
	city: 'City',
	facilityType: 'Facility type',
	fieldSize: 'Approximate field size',
	urgency: 'Service urgency',
	services: 'Services needed',
	message: 'Additional details',
};

function escapeHtml(value: string) {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
}

export const POST: APIRoute = async ({ request }) => {
	let data: FormData;
	try {
		data = await request.formData();
	} catch {
		return new Response(JSON.stringify({ ok: false, error: 'Invalid form submission.' }), { status: 400 });
	}

	// Honeypot: real visitors never fill this in; bots usually do.
	if (String(data.get('company_website') || '').trim() !== '') {
		return new Response(JSON.stringify({ ok: true }), { status: 200 });
	}

	const firstName = String(data.get('firstName') || '').trim();
	const lastName = String(data.get('lastName') || '').trim();
	const email = String(data.get('email') || '').trim();
	const phone = String(data.get('phone') || '').trim();

	if (!firstName || !lastName || !email || !phone) {
		return new Response(JSON.stringify({ ok: false, error: 'Please fill in all required fields.' }), { status: 400 });
	}

	const rows = Object.entries(FIELD_LABELS)
		.map(([key, label]) => {
			const values = data.getAll(key).map(String).filter(Boolean);
			if (values.length === 0) return null;
			return { label, value: values.join(', ') };
		})
		.filter((row): row is { label: string; value: string } => row !== null);

	const textBody = rows.map((r) => `${r.label}: ${r.value}`).join('\n');
	const htmlBody = `<table>${rows
		.map((r) => `<tr><td><strong>${escapeHtml(r.label)}</strong></td><td>${escapeHtml(r.value)}</td></tr>`)
		.join('')}</table>`;

	const apiKey = import.meta.env.RESEND_API_KEY;
	if (!apiKey) {
		console.error('RESEND_API_KEY is not configured — contact form cannot deliver email.');
		return new Response(
			JSON.stringify({ ok: false, error: 'The contact form is not fully set up yet. Please call us directly.' }),
			{ status: 500 },
		);
	}

	const toAddress = import.meta.env.CONTACT_TO_EMAIL || EMAIL;

	const resendResponse = await fetch('https://api.resend.com/emails', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${apiKey}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			from: 'Texas Turf Maintenance <leads@texasturfmaintenance.com>',
			to: [toAddress],
			reply_to: email,
			subject: `New quote request from ${firstName} ${lastName}`,
			text: textBody,
			html: htmlBody,
		}),
	});

	if (!resendResponse.ok) {
		const errorText = await resendResponse.text();
		console.error('Resend API error:', resendResponse.status, errorText);
		return new Response(JSON.stringify({ ok: false, error: 'Could not send your request. Please call us directly.' }), {
			status: 502,
		});
	}

	return new Response(JSON.stringify({ ok: true }), { status: 200 });
};

// Single source of truth for business identity, contact info, and canonical
// domain. Every page/component should import from here instead of hardcoding
// these values, so a rebrand or NAP change is a one-line edit, not a
// find-and-replace across 30 files.

export const SITE_NAME = 'Texas Turf Maintenance';
export const TAGLINE = 'Clean. Safe. Game Ready.';

// Brand palette, per the Texas Turf Maintenance brand book (v1.0).
// Applied directly as literal hex values across pages for now — see the
// note in Nav.astro about migrating to CSS custom properties.
export const BRAND = {
	green900: '#123E2A', // primary dark green (PMS 3435 C)
	green900Deep: '#0A2318', // footer/deepest shade
	green500: '#3FAE49', // accent green (PMS 362 C)
	green500Hover: '#2F8C38',
	gray200: '#E5E7E9', // PMS Cool Gray 2 C
	gray500: '#6B6F72', // PMS Cool Gray 9 C
	black: '#111111', // PMS Black 6 C
};

// Canonical domain (apex, no www — matches robots.txt and the Vercel
// deployment doc's www -> apex redirect). Do not add a trailing slash.
export const SITE_URL = 'https://texasturfmaintenance.com';

// PLACEHOLDER — Andrew hasn't decided yet between forwarding his cell via
// Google Voice / a call-tracking number, or listing it directly. Replace
// both values below with the final number before launch; every page pulls
// from here so this is the only place that needs to change.
export const PHONE_DISPLAY = '(000) 000-0000';
export const PHONE_TEL = 'tel:+10000000000';

export const EMAIL = 'andrew@texasturfmaintenance.com';

// Top-level nav items. An item with `children` renders as a dropdown on
// desktop and an expanded sub-list on mobile — used to keep the sport-page
// links reachable (and their internal-linking SEO value intact) without
// crowding the top-level bar with all 11 links at once.
export const NAV_LINKS = [
	{ href: '/', label: 'Home', key: 'home' },
	{
		href: '/services',
		label: 'Services',
		key: 'services',
		children: [
			{ href: '/football-field-turf-maintenance', label: 'Football Fields', key: 'football' },
			{ href: '/soccer-field-turf-maintenance', label: 'Soccer Fields', key: 'soccer' },
			{ href: '/baseball-field-turf-maintenance', label: 'Baseball Fields', key: 'baseball' },
			{ href: '/indoor-turf-maintenance', label: 'Indoor Turf', key: 'indoor' },
			{ href: '/gmax-testing-dallas', label: 'GMAX Testing', key: 'gmax' },
		],
	},
	{ href: '/commercial-artificial-turf-cleaning', label: 'Commercial', key: 'commercial' },
	{ href: '/blog', label: 'Blog', key: 'blog' },
	{ href: '/locations', label: 'Locations', key: 'locations' },
	{ href: '/about', label: 'About', key: 'about' },
	{ href: '/contact', label: 'Contact', key: 'contact' },
];

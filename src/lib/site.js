// Single source of truth for business identity, contact info, and canonical
// domain. Every page/component should import from here instead of hardcoding
// these values, so a rebrand or NAP change is a one-line edit, not a
// find-and-replace across 30 files.

export const SITE_NAME = 'Texas Turf Maintenance';

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

export const NAV_LINKS = [
	{ href: '/', label: 'Home', key: 'home' },
	{ href: '/services', label: 'Services', key: 'services' },
	{ href: '/football-field-turf-maintenance', label: 'Football Fields', key: 'football' },
	{ href: '/soccer-field-turf-maintenance', label: 'Soccer Fields', key: 'soccer' },
	{ href: '/baseball-field-turf-maintenance', label: 'Baseball Fields', key: 'baseball' },
	{ href: '/indoor-turf-maintenance', label: 'Indoor Turf', key: 'indoor' },
	{ href: '/gmax-testing-dallas', label: 'GMAX Testing', key: 'gmax' },
	{ href: '/blog', label: 'Blog', key: 'blog' },
	{ href: '/locations', label: 'Locations', key: 'locations' },
	{ href: '/about', label: 'About', key: 'about' },
	{ href: '/contact', label: 'Contact', key: 'contact' },
];

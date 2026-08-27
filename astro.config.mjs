// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
	// All existing pages keep prerendering to static HTML (no SEO impact).
	// The adapter only enables on-demand rendering for routes that opt in
	// with `export const prerender = false;` — currently just /api/contact.
	adapter: vercel(),
});

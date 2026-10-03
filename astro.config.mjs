// @ts-check
import { defineConfig } from 'astro/config';
import gallery from 'astro-gallery';

// https://astro.build/config
export default defineConfig({
	site: 'https://archris05.github.io',
	base: '/',
	integrations: [gallery({ locale: 'es' })],
});

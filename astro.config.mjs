import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

// Kapag may final domain na, dito lamang ito ilalagay.
const site = 'https://igorotstonepark.com';

// Hybrid output: the content pages are prerendered (static) while the
// /api/weather endpoint runs on the Cloudflare Worker (server-side fetch + cache).
export default defineConfig({
  site: site || undefined,
  output: 'server',
  adapter: cloudflare(),
  integrations: site ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()]
  }
});

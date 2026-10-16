// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.altheracode.com',
  // Pages are built as /page-name/index.html, so URLs match the current Webflow ones (/contact, /blog, ...)
  trailingSlash: 'ignore',
  // Build /services/x as x.html: Cloudflare serves it at /services/x with no trailing slash, exactly like the old Webflow URLs.
  build: { format: 'file' },
  // Generates /sitemap-index.xml with every built page (draft case studies are not built, so they are not listed).
  integrations: [sitemap()],
});

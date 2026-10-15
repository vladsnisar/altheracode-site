// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.altheracode.com',
  // Pages are built as /page-name/index.html, so URLs match the current Webflow ones (/contact, /blog, ...)
  trailingSlash: 'ignore',
});

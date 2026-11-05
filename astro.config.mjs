// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://frenchiefam.dev',
  base: process.env.PAGES_BASE_PATH || '/',
  trailingSlash: 'always',
});

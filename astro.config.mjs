import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), sitemap(), robotsTxt()],
  site: 'https://www.affordableautomaticgatehouston.com/',
  output: 'server',
  adapter: vercel(),
});

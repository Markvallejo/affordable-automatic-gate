import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), sitemap(), robotsTxt()],
  site: (import.meta.env.PUBLIC_SITE_URL || "http://localhost:4321"),
});

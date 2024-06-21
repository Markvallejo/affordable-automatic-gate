import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
    site: 'http://localhost:4321/',
    integrations: [react(), sitemap(), robotsTxt()],
});

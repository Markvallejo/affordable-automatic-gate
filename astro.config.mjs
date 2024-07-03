import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:4321/',
  integrations: [react(), sitemap(), robotsTxt()],
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
});

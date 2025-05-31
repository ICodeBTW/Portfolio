// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  // server: { port: 4321, host: "0.0.0.0"}, #dev
  output: 'server',
  adapter:  cloudflare(),
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});
// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import awsAmplify from 'astro-aws-amplify';

// https://astro.build/config
export default defineConfig({
  // server: { port: 4321, host: "0.0.0.0"},
  output: 'server',
  adapter:  awsAmplify(),
  // site: "https://www.shreenidhi.dev/",

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});
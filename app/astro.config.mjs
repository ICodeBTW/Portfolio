import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  site: 'https://www.shreenidhi.dev',

  redirects: {
    "/blog":  "/under-construction"
  },

  // server: {host:true},

  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),

  integrations: [react()],

  vite: {
    resolve: {
      alias: import.meta.env.PROD && {
        "react-dom/server": "react-dom/server.edge",
      },
    },
    plugins: [tailwindcss()]
  }
});
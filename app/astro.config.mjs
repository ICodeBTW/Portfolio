import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';
import vercelAdapter from '@astrojs/vercel';

export default defineConfig({

  output: "static",
  site: 'https://www.shreenidhi.dev',

  redirects: {
    "/blog":  "/under-construction",
  },

  server: {host:true},

  adapter: vercelAdapter({
    webAnalytics: true
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
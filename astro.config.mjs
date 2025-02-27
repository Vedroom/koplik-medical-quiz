// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  // Esto habilita APIs dinámicas
  output: "server",
 
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    maxDuration: 8,
  }),
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  },

  devToolbar: {
    enabled: false
  },

});
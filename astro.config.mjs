// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  
  //Configuración para utilizar GitHub Pages
  site: 'https://Vedroom.github.io',
  base: 'medical-quiz',

  // Esto habilita APIs dinámicas
  output: "server",

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  },

  devToolbar: {
    enabled: false
  }
});
// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build
export default defineConfig({
  // THE FIX: Tells Astro you are in a sub-folder on GitHub
  site: 'https://hansmanguilimotan-devworks.github.io',
  base: '/hans-portfolio',
  
  // This makes sure your images and CSS assets are handled correctly
  build: {
    assets: '_astro'
  },

  vite: {
    plugins: [tailwindcss()],
  },
});

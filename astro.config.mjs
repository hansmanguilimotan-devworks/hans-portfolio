// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // 1. ADD THESE TWO LINES FOR GITHUB PAGES
  site: 'https://hansmanguilimotan-devworks.github.io',
  base: '/hans-portfolio',

  vite: {
    plugins: [tailwindcss()],
  },
});

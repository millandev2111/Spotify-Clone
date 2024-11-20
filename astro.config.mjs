import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), react()],
  output: 'server' //Se ejecuta en el servidor, las paginas se renderizan en el servidor. PQ spotify tiene almbunes infinitos
});
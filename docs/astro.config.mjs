import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://xandemon.github.io",
  base: "/developer-icons/docs",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});

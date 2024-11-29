import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://xandemon.github.io",
  base: "/developer-icons/docs",
  publicDir: "./assets",
  integrations: [react(), tailwind({
    applyBaseStyles: false,
  }), partytown({
    config: {
      forward: ['dataLayer.push']
    }
  }), sitemap()],
});
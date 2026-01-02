// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site: "https://olavostauros.github.io",
    base: "/spotify-ui/",
    integrations: [tailwind()],
});

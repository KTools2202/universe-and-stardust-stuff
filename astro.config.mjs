import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import lucide from "lucide-astro";

export default defineConfig({
  integrations: [tailwind(), lucide()],
  vite: {
    ssr: {
      noExternal: ["lucide-astro"],
    },
  },
});

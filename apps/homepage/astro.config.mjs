import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Simple Pie",
      logo: {
        src: './src/assets/logo-light.svg',
        replacesTitle: true,
      },
      social: {
        github: "https://github.com/serjilyashenko/simple-pie-project"
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" }
          ]
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" }
        }
      ]
    })
  ]
});

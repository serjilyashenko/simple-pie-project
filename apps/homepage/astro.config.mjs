import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Simple Pie",
      head: [
        {
          tag: "link",
          attrs: {
            rel: "manifest",
            href: "/manifest.webmanifest",
          }
        },
        {
          tag: "link",
          attrs: {
            rel: "icon",
            href: "/favicon.ico",
            sizes: "32x32"
          }
        },
        {
          tag: "link",
          attrs: {
            rel: "icon",
            href: "/icon.svg",
            type: "image/svg+xml"
          }
        },
        {
          tag: "link",
          attrs: {
            rel: "apple-touch-icon",
            href: "/apple-touch-icon.png",
          }
        }
      ],
      logo: {
        light: "./src/assets/logo-light.svg",
        dark: "./src/assets/logo-dark.svg",
        replacesTitle: true
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

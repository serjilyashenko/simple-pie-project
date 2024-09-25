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
        github: "https://github.com/serjilyashenko/simple-pie-project",
        email: "mailto:mailto:rower_stats0g@icloud.com?subject=SimplePieFeedback",
      },
      sidebar: [
        {
          label: "Getting Started",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Introduction", slug: "getting-started/introduction" },
            { label: "simple-pie", slug: "getting-started/simple-pie" },
            { label: "react-simple-pie", slug: "getting-started/react-simple-pie" },
            { label: "Random Examples", slug: "getting-started/random-examples" }
          ]
        },
        {
          label: "Guides",
          items: [
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

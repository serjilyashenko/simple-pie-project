import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: 'https://simple-pie.netlify.app/',
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
        },
        // Yandex.Metrika counter
        {
          tag: "script",
          attrs: {
            type: "text/javascript",
          },
          content: "(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date(); for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }} k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, \"script\", \"https://mc.yandex.ru/metrika/tag.js\", \"ym\"); ym(98742410, \"init\", { clickmap:true, trackLinks:true, accurateTrackBounce:true }); "
        },
        {
          tag: "noscript",
          content: "<div><img src=\"https://mc.yandex.ru/watch/98742410\" style=\"position:absolute; left:-9999px;\" alt=\"\" /></div>"
        }
        // /Yandex.Metrika counter
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
        }
      ]
    })
  ]
});

import App from "./App.vue";
import { defineApp, defineRoute } from "@vuerend/core";
import { slides } from "./pages";
import { getSlidePath, slideDeckClientScript } from "./slide-core";

const devStyleScripts = import.meta.env.DEV
  ? [
      {
        type: "module",
        src: "/src/style-entry.ts",
      },
    ]
  : [];

const routes = slides.map((slide, index) =>
  defineRoute({
    path: getSlidePath(index),
    component: App,
    getProps: () => ({ currentIndex: index }),
    head: {
      title: slide.title,
    },
    render: { strategy: "ssg" },
  }),
);

export default defineApp({
  document: {
    title: "Vilide",
    lang: "ja",
    meta: [
      {
        name: "description",
        content: "Vue コンポーネントで組み立てるスライドデッキです。",
      },
    ],
    scripts: [...devStyleScripts, { type: "module", children: slideDeckClientScript }],
    stylesheets: ["/styles/site.css"],
  },
  routes,
});

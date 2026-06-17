import type { SlidePage } from "../slide-core";
import ClosingSlide from "./ClosingSlide.vue";
import CoreSlide from "./CoreSlide.vue";
import TitleSlide from "./TitleSlide.vue";

export const slides: SlidePage[] = [
  {
    title: "Vilide",
    component: TitleSlide,
  },
  {
    title: "Slide core",
    component: CoreSlide,
  },
  {
    title: "Next steps",
    component: ClosingSlide,
  },
];

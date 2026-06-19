import { describe, expect, it } from "vite-plus/test";
import { getSlideScale, SLIDE_HEIGHT, SLIDE_WIDTH } from "./viewport";

describe("getSlideScale", () => {
  it("keeps the logical canvas at its native size", () => {
    expect(getSlideScale(SLIDE_WIDTH, SLIDE_HEIGHT)).toBe(1);
  });

  it("fits to the limiting viewport dimension", () => {
    expect(getSlideScale(640, 720)).toBe(0.5);
    expect(getSlideScale(1280, 360)).toBe(0.5);
  });

  it("allows the complete canvas to scale up", () => {
    expect(getSlideScale(2560, 1440)).toBe(2);
  });

  it("collapses safely before the viewport has a size", () => {
    expect(getSlideScale(0, 720)).toBe(0);
    expect(getSlideScale(1280, 0)).toBe(0);
  });
});

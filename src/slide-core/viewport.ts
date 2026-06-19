export const SLIDE_WIDTH = 1280;
export const SLIDE_HEIGHT = 720;

export function getSlideScale(availableWidth: number, availableHeight: number) {
  if (availableWidth <= 0 || availableHeight <= 0) {
    return 0;
  }

  return Math.min(availableWidth / SLIDE_WIDTH, availableHeight / SLIDE_HEIGHT);
}

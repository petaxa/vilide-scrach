import { SLIDE_HEIGHT, SLIDE_WIDTH } from "./viewport";

export const slideDeckClientScript = `
const initSlideDeck = () => {
  const deck = document.querySelector("[data-slide-deck]");
  if (!(deck instanceof HTMLElement)) {
    return;
  }

  const editableSelector = "input, select, textarea, [contenteditable='true']";
  const nextKeys = new Set(["ArrowRight", "ArrowDown", "PageDown", "Enter", " "]);
  const previousKeys = new Set(["ArrowLeft", "ArrowUp", "PageUp", "Backspace"]);
  const fullscreenButton = document.querySelector("[data-slide-fullscreen]");
  const fullscreenIcon = fullscreenButton?.querySelector(".icon-fullscreen");
  const stage = deck.querySelector("[data-slide-stage]");
  const frame = deck.querySelector("[data-slide-frame]");
  const calculateSlideScale = (availableWidth, availableHeight) => {
    if (availableWidth === 0 || availableHeight === 0) {
      return 0;
    }

    return Math.min(
      availableWidth / ${SLIDE_WIDTH},
      availableHeight / ${SLIDE_HEIGHT},
    );
  };

  const updateSlideScale = () => {
    if (!(stage instanceof HTMLElement) || !(frame instanceof HTMLElement)) {
      return;
    }

    const scale = calculateSlideScale(stage.clientWidth, stage.clientHeight);
    frame.style.setProperty("--slide-scale", String(scale));
    frame.dataset.slideScale = String(scale);
  };

  const navigate = (url) => {
    if (url) {
      window.location.assign(url);
    }
  };

  const updateFullscreen = () => {
    const isFullscreen = document.fullscreenElement !== null;
    fullscreenButton?.setAttribute(
      "aria-label",
      isFullscreen ? "Exit fullscreen" : "Enter fullscreen",
    );
    fullscreenIcon?.classList.toggle("icon-fullscreen-active", isFullscreen);
  };

  document.addEventListener("keydown", (event) => {
    if (
      event.defaultPrevented ||
      event.altKey ||
      event.ctrlKey ||
      event.metaKey ||
      event.target?.closest?.(editableSelector)
    ) {
      return;
    }

    if (nextKeys.has(event.key)) {
      event.preventDefault();
      navigate(deck.dataset.nextUrl);
      return;
    }

    if (previousKeys.has(event.key)) {
      event.preventDefault();
      navigate(deck.dataset.previousUrl);
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      navigate(deck.dataset.firstUrl);
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      navigate(deck.dataset.lastUrl);
    }
  });

  fullscreenButton?.addEventListener("click", async () => {
    try {
      if (document.fullscreenElement !== null) {
        await document.exitFullscreen();
      } else {
        await deck.requestFullscreen?.();
      }
    } finally {
      updateFullscreen();
      updateSlideScale();
    }
  });

  const resizeObserver = new ResizeObserver(updateSlideScale);
  if (stage instanceof HTMLElement) {
    resizeObserver.observe(stage);
  }

  document.addEventListener("fullscreenchange", () => {
    updateFullscreen();
    updateSlideScale();
  });
  updateFullscreen();
  updateSlideScale();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSlideDeck, { once: true });
} else {
  initSlideDeck();
}
`;

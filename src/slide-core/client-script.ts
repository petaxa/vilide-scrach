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
    }
  });

  document.addEventListener("fullscreenchange", updateFullscreen);
  updateFullscreen();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSlideDeck, { once: true });
} else {
  initSlideDeck();
}
`;

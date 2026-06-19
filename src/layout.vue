<script setup lang="ts">
import { computed } from "vue";
import { slides } from "./pages";
import { clampSlideIndex, getSlideUrl, SLIDE_HEIGHT, SLIDE_WIDTH } from "./slide-core";

const props = defineProps<{
  currentIndex: number;
}>();

const slideCount = slides.length;
const currentIndex = computed(() => clampSlideIndex(props.currentIndex, slideCount));
const currentSlide = computed(() => slides[currentIndex.value] ?? slides[0]);
const currentSlideNumber = computed(() => currentIndex.value + 1);
const progress = computed(() => {
  if (slideCount <= 1) {
    return slideCount === 1 ? 1 : 0;
  }

  return currentIndex.value / (slideCount - 1);
});
const canGoPrevious = computed(() => currentIndex.value > 0);
const canGoNext = computed(() => currentIndex.value < slideCount - 1);
const previousPath = computed(() =>
  canGoPrevious.value ? getSlideUrl(currentIndex.value - 1) : undefined,
);
const nextPath = computed(() =>
  canGoNext.value ? getSlideUrl(currentIndex.value + 1) : undefined,
);
const firstPath = computed(() => getSlideUrl(0));
const lastPath = computed(() => getSlideUrl(slideCount - 1));
</script>

<template>
  <main
    class="slide-layout"
    aria-label="Slide deck"
    data-slide-deck
    :data-current-slide="currentSlideNumber"
    :data-slide-count="slideCount"
    :data-previous-url="previousPath"
    :data-next-url="nextPath"
    :data-first-url="firstPath"
    :data-last-url="lastPath"
  >
    <div class="deck-progress" aria-hidden="true">
      <span :style="{ width: `${progress * 100}%` }"></span>
    </div>

    <section class="deck-viewport">
      <div class="deck-stage" data-slide-stage>
        <div
          class="slide-frame"
          data-slide-frame
          :style="{ height: `${SLIDE_HEIGHT}px`, width: `${SLIDE_WIDTH}px` }"
        >
          <article
            class="slide-canvas"
            :aria-label="`${currentSlideNumber} / ${slideCount}: ${currentSlide.title}`"
          >
            <component :is="currentSlide.component" />
          </article>
        </div>
      </div>
    </section>

    <footer class="deck-controls" aria-label="Slide controls">
      <a
        class="control-button"
        :href="previousPath"
        :aria-disabled="String(!canGoPrevious)"
        aria-label="Previous slide"
      >
        <span class="icon-chevron icon-chevron-left" aria-hidden="true"></span>
      </a>

      <div class="slide-status" aria-live="polite">
        <span>{{ currentSlideNumber }}</span>
        <span class="slide-status-divider">/</span>
        <span>{{ slideCount }}</span>
      </div>

      <a
        class="control-button"
        :href="nextPath"
        :aria-disabled="String(!canGoNext)"
        aria-label="Next slide"
      >
        <span class="icon-chevron icon-chevron-right" aria-hidden="true"></span>
      </a>

      <button
        class="control-button"
        type="button"
        aria-label="Enter fullscreen"
        data-slide-fullscreen
      >
        <span class="icon-fullscreen" aria-hidden="true"></span>
      </button>
    </footer>
  </main>
</template>

<style scoped>
.slide-layout {
  --control-height: 40px;
  --control-border: #d7dce3;
  --control-text: #273241;
  --paper-shadow: 0 28px 80px rgb(31 41 55 / 0.18);
  background:
    radial-gradient(circle at 20% 18%, rgb(14 165 148 / 0.12), transparent 28%),
    radial-gradient(circle at 82% 82%, rgb(225 29 72 / 0.1), transparent 30%), #eef1f5;
  color: #111827;
  display: grid;
  grid-template-rows: 4px minmax(0, 1fr) auto;
  height: 100dvh;
  overflow: hidden;
}

.slide-layout:fullscreen {
  background: #111827;
}

.deck-progress {
  background: rgb(17 24 39 / 0.08);
  height: 4px;
  overflow: hidden;
}

.deck-progress span {
  background: linear-gradient(90deg, #0f766e, #e11d48);
  display: block;
  height: 100%;
  transition: width 180ms ease;
}

.deck-viewport {
  min-height: 0;
  min-width: 0;
  overflow: hidden;
  position: relative;
}

.deck-stage {
  bottom: 12px;
  left: 22px;
  min-height: 0;
  min-width: 0;
  position: absolute;
  right: 22px;
  top: 22px;
}

.slide-frame {
  --slide-scale: 1;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%) scale(var(--slide-scale));
  transform-origin: center;
}

.slide-canvas {
  background: #fbfcfd;
  border: 1px solid rgb(17 24 39 / 0.08);
  box-shadow: var(--paper-shadow);
  color: #111827;
  container-type: size;
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.deck-controls {
  align-items: center;
  display: flex;
  gap: 8px;
  justify-content: center;
  padding: 12px 18px 18px;
}

.control-button {
  align-items: center;
  appearance: none;
  background: rgb(255 255 255 / 0.84);
  border: 1px solid var(--control-border);
  border-radius: 8px;
  color: var(--control-text);
  cursor: pointer;
  display: inline-flex;
  height: var(--control-height);
  justify-content: center;
  text-decoration: none;
  transition:
    background-color 140ms ease,
    border-color 140ms ease,
    color 140ms ease,
    transform 140ms ease;
  width: var(--control-height);
}

.control-button:hover:not(:disabled, [aria-disabled="true"]) {
  background: #ffffff;
  border-color: #a8b2c0;
  transform: translateY(-1px);
}

.control-button:focus-visible {
  outline: 3px solid rgb(13 148 136 / 0.3);
  outline-offset: 2px;
}

.control-button:disabled,
.control-button[aria-disabled="true"] {
  color: #9aa4b2;
  cursor: default;
  opacity: 0.55;
  pointer-events: none;
}

.slide-status {
  align-items: center;
  background: rgb(255 255 255 / 0.78);
  border: 1px solid var(--control-border);
  border-radius: 8px;
  color: #4b5563;
  display: inline-flex;
  font-size: 14px;
  font-variant-numeric: tabular-nums;
  gap: 5px;
  height: var(--control-height);
  justify-content: center;
  min-width: 72px;
  padding: 0 12px;
}

.slide-status-divider {
  color: #9aa4b2;
}

.icon-chevron {
  border-color: currentColor;
  border-style: solid;
  border-width: 0 2px 2px 0;
  display: block;
  height: 10px;
  width: 10px;
}

.icon-chevron-left {
  transform: rotate(135deg);
}

.icon-chevron-right {
  transform: rotate(-45deg);
}

.icon-fullscreen {
  display: block;
  height: 18px;
  position: relative;
  width: 18px;
}

.icon-fullscreen::before,
.icon-fullscreen::after {
  border-color: currentColor;
  border-style: solid;
  content: "";
  height: 7px;
  position: absolute;
  width: 7px;
}

.icon-fullscreen::before {
  border-width: 2px 0 0 2px;
  left: 0;
  top: 0;
}

.icon-fullscreen::after {
  border-width: 0 2px 2px 0;
  bottom: 0;
  right: 0;
}

.icon-fullscreen-active::before {
  left: 3px;
  top: 3px;
}

.icon-fullscreen-active::after {
  bottom: 3px;
  right: 3px;
}

@media (max-width: 640px) {
  .deck-stage {
    bottom: 8px;
    left: 12px;
    right: 12px;
    top: 12px;
  }

  .deck-controls {
    padding: 8px 12px 12px;
  }
}
</style>

<script setup lang="ts">
import SlideDeck from "./layout.vue";

defineProps<{
  currentIndex: number;
}>();
</script>

<template>
  <SlideDeck :current-index="currentIndex" />
</template>

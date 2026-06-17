<template>
  <section class="closing-slide slide-page">
    <div>
      <p class="eyebrow">Next steps</p>
      <h2>ページを増やすときは `src/pages` に足すだけ。</h2>
    </div>

    <div class="path-panel">
      <p>1. Vue コンポーネントを追加</p>
      <p>2. `src/pages/index.ts` に登録</p>
      <p>3. 必要な機能は `src/slide-core` に分離</p>
    </div>
  </section>
</template>

<style scoped>
.closing-slide {
  background: linear-gradient(180deg, transparent 0, rgb(15 118 110 / 0.08) 100%), #fbfcfd;
  display: grid;
  gap: 7.778cqh;
  grid-template-rows: 1fr auto;
  height: 100%;
  padding: 11.944cqh 7.5cqw 11.389cqh;
}

.closing-slide .eyebrow {
  color: #f59e0b;
  font-size: 2.031cqw;
  font-weight: 800;
  letter-spacing: 0;
  margin: 0 0 3.333cqh;
}

.closing-slide h2 {
  color: #101827;
  font-size: 5.313cqw;
  letter-spacing: 0;
  line-height: 1.08;
  margin: 0;
  max-width: 71.875cqw;
}

.path-panel {
  border-left: 0.625cqw solid #0f766e;
  display: grid;
  gap: 2.5cqh;
  padding: 1.111cqh 0 1.111cqh 2.656cqw;
}

.path-panel p {
  color: #374151;
  font-size: 2.344cqw;
  font-weight: 650;
  line-height: 1.32;
  margin: 0;
}
</style>

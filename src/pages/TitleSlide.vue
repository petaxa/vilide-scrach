<template>
  <section class="title-slide slide-page">
    <p class="eyebrow">Vuerend + Vue</p>
    <h1>Vilide</h1>
    <p class="lead">Vue コンポーネントで組み立てるスライドデッキ</p>
    <div class="accent-grid" aria-hidden="true">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </section>
</template>

<style scoped>
.title-slide {
  background:
    linear-gradient(135deg, rgb(15 118 110 / 0.11), transparent 42%),
    linear-gradient(315deg, rgb(225 29 72 / 0.1), transparent 38%), #fbfcfd;
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  height: 100%;
  padding: 11.944cqh 7.5cqw 10.833cqh;
}

.title-slide .eyebrow {
  color: #0f766e;
  font-size: 2.187cqw;
  font-weight: 700;
  letter-spacing: 0;
  margin: 0 0 3.889cqh;
}

.title-slide h1 {
  color: #101827;
  font-size: 10.313cqw;
  font-weight: 800;
  letter-spacing: 0;
  line-height: 0.95;
  margin: 0;
}

.title-slide .lead {
  align-self: start;
  color: #4b5563;
  font-size: 3.125cqw;
  line-height: 1.35;
  margin: 4.722cqh 0 0;
  max-width: 59.375cqw;
}

.accent-grid {
  align-self: end;
  display: grid;
  gap: 1.406cqw;
  grid-template-columns: repeat(3, 1fr);
  width: 40.625cqw;
}

.accent-grid span {
  border-radius: 8px;
  display: block;
  height: 1.667cqh;
}

.accent-grid span:nth-child(1) {
  background: #0f766e;
}

.accent-grid span:nth-child(2) {
  background: #f59e0b;
}

.accent-grid span:nth-child(3) {
  background: #e11d48;
}
</style>

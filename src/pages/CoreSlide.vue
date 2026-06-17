<template>
  <section class="core-slide slide-page">
    <div class="copy">
      <p class="eyebrow">Slide core</p>
      <h2>最低限の操作を、後から育てやすい場所へ。</h2>
    </div>

    <div class="feature-list">
      <article>
        <span class="feature-index">01</span>
        <h3>ページ送り</h3>
        <p>矢印キー、PageUp/PageDown、ボタン操作を同じ状態管理に集約。</p>
      </article>
      <article>
        <span class="feature-index">02</span>
        <h3>全画面</h3>
        <p>ブラウザの Fullscreen API を小さなクライアント処理として分離。</p>
      </article>
      <article>
        <span class="feature-index">03</span>
        <h3>固定キャンバス</h3>
        <p>1280 x 720 の論理サイズを保ったまま、画面に合わせて拡大縮小。</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.core-slide {
  background: #fbfcfd;
  display: grid;
  gap: 4.219cqw;
  grid-template-columns: 0.92fr 1.08fr;
  height: 100%;
  padding: 10.556cqh 6.875cqw;
}

.core-slide .copy {
  align-content: center;
  display: grid;
}

.core-slide .eyebrow {
  color: #e11d48;
  font-size: 1.875cqw;
  font-weight: 800;
  letter-spacing: 0;
  margin: 0 0 3.056cqh;
}

.core-slide h2 {
  color: #101827;
  font-size: 4.844cqw;
  letter-spacing: 0;
  line-height: 1.08;
  margin: 0;
}

.feature-list {
  align-content: center;
  display: grid;
  gap: 3.056cqh;
}

.feature-list article {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  display: grid;
  gap: 1.667cqh;
  padding: 3.889cqh 2.5cqw;
}

.feature-index {
  color: #0f766e;
  font-size: 1.563cqw;
  font-weight: 800;
  letter-spacing: 0;
}

.core-slide h3 {
  color: #111827;
  font-size: 2.656cqw;
  letter-spacing: 0;
  line-height: 1.1;
  margin: 0;
}

.core-slide p {
  color: #4b5563;
  font-size: 1.719cqw;
  line-height: 1.45;
  margin: 0;
}
</style>

<template>
  <div id="key-visual" class="key-visual">
    <div class="text__wrapper">
      <p class="headline w6 lh150">悲しみに<br />寄り添うアプリ</p>
      <p class="mt24 fs24">死後の煩雑な手続きをワンストップでサポート</p>
      <a href="" class="btn btn--orange mt48 fs24">最新情報を受け取る</a>
    </div>
    <img class="app-img mt48" src="@/assets/image/top/app.png" alt="キービジュアル">
  </div>
</template>

<style scoped>
  .key-visual {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: calc((100vh - (37.5vw + 4.8rem)) / 2) auto;
    padding: 0 12.0rem;
  }
  .headline {
    font-size: 6.4rem;
  }
  .app-img {
    width: 30vw;
    height: 37.5vw;
  }
</style>
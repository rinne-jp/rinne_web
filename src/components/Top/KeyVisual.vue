<template>
  <div class="contents">
    <div id="key-visual" class="key-visual">
      <div class="text__wrapper">
        <p class="headline w6 lh150">悲しみに<br />寄り添うアプリ</p>
        <p class="headline-sub">死後の煩雑な手続きを<br v-show="sp" />ワンストップでサポート</p>
        <a href="#form-email" class="to-form-email btn btn--orange mt48 fs24">
          最新情報を受け取る
          <img class="arrow-right-img" src="@/assets/image/arrow_right.svg" alt="右矢印">
        </a>
      </div>
      <img class="app-img mt48" src="@/assets/image/top/app.png" alt="キービジュアル">
    </div>
  </div>
</template>

<script>
export default {
  props: ["sp"],
};
</script>

<style scoped>
.key-visual {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: calc((100vh - (37.5vw + 4.8rem)) / 2) 12.0rem;
}
.headline {
  font-size: 6.4rem;
}
.headline-sub {
  margin-top: 2.4rem;
  font-size: 2.4rem;
}
.to-form-email {
  display: flex;
  align-items: center;
  width: 32.0rem;
  padding: 1.2rem 0 1.2rem 3.2rem;
}
.arrow-right-img {
  width: 3.2rem;
  height: 3.2rem;
  margin-left: 0.4rem;
}
.to-form-email:hover .arrow-right-img{
  margin-left: 1.6rem;
  transition: all 0.5s 0s ease;
}
.app-img {
  width: 30vw;
  height: 37.5vw;
}

@media screen and (max-width: 768px) {
  .key-visual {
    padding: 12.8rem 3.2rem 4.8rem;
    flex-direction: column;
  }
  .headline {
    font-size: 4.8rem;
  }
  .headline-sub {
    margin-top: 2.0rem;
    line-height: 1.5;
    font-size: 2.0rem;
  }
  .to-form-email {
    margin-top: 3.2rem;
  }
  .app-img {
    width: calc((100vw - 275px) / 25 * 60 * 0.8);
    height: calc((100vw - 275px) / 25 * 75 * 0.8);
  }
}
</style>
<template>
  <header>
    <div class="header__wrapper">
      <router-link to="/">
        <img class="header-img" src="@/assets/image/logo.png" alt="ロゴ" >
      </router-link>
      <div class="row">
        <router-link to="/">ホーム</router-link>
        <router-link to="/contact" class="btn-contact btn btn--orange">
          <img class="email-img" src="@/assets/image/email.svg" alt="お問い合わせ">
          <p>お問い合わせ</p>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      title: "ヘッダー"
    }
  }
}
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100vw;
  height: 8.0rem;
}
.header__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 12.0rem;
  background: var(--white);
  box-shadow: 0px 1px 0px var(--gray2);
}
.header-img {
  width: 6.4rem;
  height: 6.4rem;
}
.row {
  display: flex;
  align-items: center;
}
header a:not(:first-child) {
  margin-left: 3.2rem;
}
header a:hover {
  text-decoration: underline;
}
.btn-contact {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.4rem 3.2rem;
}
.btn-contact:hover {
  text-decoration: none;
}
.btn-contact p {
  color: var(--white);
}
.email-img {
  width: 2.4rem;
  height: 2.4rem;
  margin-right: 0.4rem;
}

@media screen and (max-width: 768px) {
  .header__wrapper {
    padding: 0.8rem 3.2rem;
  }
}
</style>
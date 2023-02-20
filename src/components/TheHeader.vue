<template>
  <header>
    <div class="header__wrapper">
      <img class="header-img" src="@/assets/image/logo.png" alt="ロゴ" >
      <div class="row">
        <router-link to="/">Home</router-link>
        <router-link to="/contact">Contact</router-link>
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
  padding: 0.8rem 5%;
  background: var(--white);
  box-shadow: 0px 1px 0px var(--gray2);
}
.header-img {
  width: 6.4rem;
  height: 6.4rem;
}
header a {
  margin-left: 3.2rem;
}
header a:hover {
  text-decoration: underline;
}
</style>
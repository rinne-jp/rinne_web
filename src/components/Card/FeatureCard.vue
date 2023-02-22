<template>
  <div class="card">
    <div class="point__tag">
      <p class="w6">point</p>
      <p class="mt4 w6 fs20">0{{ num }}</p>
    </div>
    <div class="text__wrapper" v-html="contents"></div>
    <img class="card-img mt32" :src="imgSrc" alt="特徴">
  </div>
</template>

<script>
export default {
  data() { 
    return {
      contents: `${this.appeal}${this.description}`
    }
  },
  props: {
    num: {
      type: Number,
      required: true
    },
    appeal: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
  },
  computed: {
    imgSrc () {
      return require("@/assets/image/top/feature0" + this.num + ".png")
    },
  }
}
</script>

<style scoped>
.card {
  width: 29.6rem;
  margin-right: 3.2rem; 
  padding: 4.8rem 2.4rem 0;
  border-radius: 2.4rem;
  background: var(--white);
}
.point__tag {
  position: absolute;
  top: -2.4rem;
  right: -1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 8.8rem;
  height: 8.8rem;
  border-radius: 50%;
  border: 4px solid var(--orange1);
  background: var(--white);
}
.point__tag p {
  color: var(--orange1);
}
.card-img {
  width: 20.0rem;
  height: 20.0rem;
  margin: 3.2rem 2.4rem 0;
}
</style>
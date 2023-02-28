<template>
  <TheHeader />
  <router-view :sp="sp"/>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
export default {
  data() {
    return {
      sp: false,
    }
  },
  mounted() {
    this.sp = window.innerWidth <= 768 ? true : false;
  },
  components: {
    TheHeader,
  }
}
</script>
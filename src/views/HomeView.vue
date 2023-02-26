<template>
  <div class="home">
    <TopKeyVisual />
    <TopHowItWorks />
    <TopFormEmail />
  </div>
</template>

<script>
import TopKeyVisual from '@/components/Top/KeyVisual.vue'
import TopHowItWorks from '@/components/Top/HowItWorks.vue'
import TopFormEmail from '@/components/Top/FormEmail.vue'

export default {
  name: 'HomeView',
  components: {
    TopKeyVisual,
    TopHowItWorks,
    TopFormEmail,
  }
}
</script>

<style scoped>
.home {
  overflow: auto;
  scroll-snap-type: y mandatory;
  /* height: 100vh; */
}
</style>
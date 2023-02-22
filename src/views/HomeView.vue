<template>
  <div class="home">
    <TopKeyVisual />
    <TopHowItWorks />
  </div>
</template>

<script>
// @ is an alias to /src
import TopKeyVisual from '@/components/Top/KeyVisual.vue'
import TopHowItWorks from '@/components/Top/HowItWorks.vue'

export default {
  name: 'HomeView',
  components: {
    TopKeyVisual,
    TopHowItWorks,
  }
}
</script>

<style scoped>
.home {
  scroll-snap-type: y;
}
</style>
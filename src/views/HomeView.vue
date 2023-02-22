<template>
  <div class="home">
    <TopKeyVisual />
    <TopHowItWorks />
    <FormEmail />
  </div>
</template>

<script>
import TopKeyVisual from '@/components/Top/KeyVisual.vue'
import TopHowItWorks from '@/components/Top/HowItWorks.vue'
import FormEmail from '@/components/Top/FormEmail.vue'

export default {
  name: 'HomeView',
  components: {
    TopKeyVisual,
    TopHowItWorks,
    FormEmail,
  }
}
</script>

<style scoped>
.home {
  scroll-snap-type: y;
}
</style>
<template>
  <div class="contact">
    <FormContact :sp="sp"/>
  </div>
</template>

<script>
import FormContact from '@/components/FormContact.vue'

export default {
  name: 'ContactView',
  props: ["sp"],
  components: {
    FormContact,
  }
}

</script>
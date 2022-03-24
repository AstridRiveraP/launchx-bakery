<template>
  <section class="flavor-sect">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <SeeFlavors/>
  </section>
  <section class="decorations-sect">
      <SeeDecorations/>
  </section>
  <ContactUs/>
</template>

<script>
// @ is an alias to /src
import SeeFlavors from '@/components/SeeFlavors.vue'
import SeeDecorations from '@/components/SeeDecorations.vue'
import ContactUs from '@/components/ContactUs.vue'

export default {
  name: 'ClientView',
  components: {
      SeeFlavors,
      SeeDecorations,
      ContactUs,
  }
}
</script>


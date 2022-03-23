<template>
  <section class="flavor-sect">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <SeeFlavors/>
  </section>
</template>

<script>
// @ is an alias to /src
import SeeFlavors from '@/components/SeeFlavors.vue'

export default {
  name: 'ClientView',
  components: {
      SeeFlavors
  }
}
</script>

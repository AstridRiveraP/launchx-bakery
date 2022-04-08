<template>
    <router-link to="/ClientView">Cliente</router-link>

    <FlavorQuantity/>
    <DecoQuantity/>
    <Orders/>
</template>
<script>
import FlavorQuantity from '@/components/FlavorQuantity.vue'
import DecoQuantity from '@/components/DecoQuantity.vue'
import Orders from '@/components/Orders.vue'

export default {
  name: 'ClientView',
  components: {
    FlavorQuantity,
    DecoQuantity,
    Orders
  }
}
</script>
<template>
  <section class="flavor-sect">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <SeeFlavors/>
  </section>
  <section class="decorations-sect">
      <SeeDecorations/>
  </section>
  <section>
    <h1 class="font-pacifico">Personaliza tu pastel</h1>
    <div class = "selection">
      <div class="flavor-sel">
        <SelectFlavors/>
      </div>
      <div class="decorations-sel">
        <SelectDecorations/>
      </div>
    </div>

  </section>
  <Form/>
  <ContactUs/>
</template>

<script>
// @ is an alias to /src
import SeeFlavors from '@/components/SeeFlavors.vue'
import SeeDecorations from '@/components/SeeDecorations.vue'
import ContactUs from '@/components/ContactUs.vue'
import SelectFlavors from '@/components/SelectFlavors.vue'
import SelectDecorations from '@/components/SelectDecorations.vue'
import Form from '@/components/Form.vue'
export default {
  name: 'ClientView',
  components: {
      SeeFlavors,
      SeeDecorations,
      ContactUs,
      SelectFlavors,
      SelectDecorations,
      Form
  }
}
</script>

<style scoped>
h1{
    height: 12%;
    display: block;
    font-size: 2.5rem;
}
.selection{
  display: flex;
  flex-direction: row;
}
.flavor-sel{
  display: flex;
  float:left;
  width: 70%;
}
.decorations-sel{
  display: flex;
  float:right;
  width: 30%;
}
</style>

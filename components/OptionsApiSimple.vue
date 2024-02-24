<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "OptionsApi",
  data() {
    return {
      mensaje: 'Hola Mundo'
    }
  }
})
</script>

<template>
  <div>
    <h1>Mi primer componente en Vue</h1>
    <p>{{ mensaje }}</p>
  </div>
</template>

<style scoped>

</style>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "OptionsApi",
  data() {
    return {
      mensaje: 'Hola Mundo'
    }
  },
  methods: {
    cambiarMensaje() {
      this.mensaje = 'Nuevo mensaje';
    }
  }
})
</script>

<template>
  <div>
    <h1>Mi primer componente en Vue</h1>
    <p>{{ mensaje }}</p>
    <button @click="cambiarMensaje">Cambiar mensaje</button>
  </div>
</template>

<style scoped>

</style>

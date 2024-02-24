<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "OptionsComponente",
  methods: {
    countUp() {
      this.count++;
    },
    countDown() {
      if (this.count > 0) {
        this.count--;
      }
    },
  },
  setup(props) {
  return {
    count: 0,
  };
},
})
</script>

<template>
  <div class="container">
    <h1>Options API</h1>
    <p>{{count}}</p>
    <button @click="countUp" :disabled="!count < 99">Increment</button>
    <button @click="countDown">Decrement</button>
  </div>
</template>


<style scoped>

</style>

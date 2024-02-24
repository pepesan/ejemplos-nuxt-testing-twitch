<script lang="ts">
import { ref } from 'vue';

export default {
  name: "CompositionComponente",
  setup() {
    const count = ref(0);

    const countUp = () => {
      if (count.value < 99) {
        count.value++;
      }
    };

    const countDown = () => {
      if (count.value > 0) {
        count.value--;
      }
    };

    return {
      count,
      countUp,
      countDown
    };
  },
};
</script>

<template>
  <div class="container">
    <h1>Composition API</h1>
    <p>{{count}}</p>
    <button @click="countUp" :disabled="count >= 99">Increment</button>
    <button @click="countDown" :disabled="count <= 0">Decrement</button>
  </div>
</template>


<style scoped>

</style>

<template>
  <div>
    <p>Hi, my name is {{ user }}</p>
    <label for="username">Username:</label>
    <input v-model="user" id="username" name="username" />
  </div>
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    const user = ref('Alice'); // Reactive state using ref

    return {
      user, // Return reactive state for template access
    };
  },
};
</script>

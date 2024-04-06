<script setup lang="ts">
const count = ref(0)
</script>
<template>
  <div>
    <button @click="count++">Add 1</button>
    <p>Count is: {{ count }}</p>
  </div>
</template>
<style scoped>
</style>

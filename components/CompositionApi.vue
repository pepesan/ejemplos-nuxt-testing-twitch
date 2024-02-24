<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const message = ref('Hello, World!')
</script>

<style scoped>

</style>

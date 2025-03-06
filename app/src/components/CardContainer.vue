<template>
  <div class="">
      <h2>{{ mon.name }}</h2>
      <h3>{{ index + 1 }}</h3>
  </div>
  
</template>

<script setup>
import { defineProps } from 'vue';
defineProps ({
  mon: Object, index: String
})
</script>

<style scoped>

</style>
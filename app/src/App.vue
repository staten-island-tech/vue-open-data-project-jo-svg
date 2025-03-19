<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
   <!--  Crime Rate Trends Over Time -->

    <div class="wrapper">

      <nav class="">
        <RouterLink to="/">Home</RouterLink>
      
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>

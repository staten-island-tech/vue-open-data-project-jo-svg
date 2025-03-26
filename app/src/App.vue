<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
   <!--  Crime Rate Trends Over Time -->

    <div class="wrapper">

      <nav class=" end-0 flex flex-row gap-x-5 m-6">
        <RouterLink class="btn" to="/">Home</RouterLink>
        <RouterLink class="btn" to="/AllStats">All Stats</RouterLink>
      
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>

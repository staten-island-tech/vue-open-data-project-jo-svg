<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
   <!--  Crime Rate Trends Over Time -->

    <div class="wrapper">

      <nav class="">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/GameGuesser">Game Guesser</RouterLink>
        
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>

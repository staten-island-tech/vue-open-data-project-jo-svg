<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/CardContainer.vue'
</script>

<template>
  <header>
   <!--  Crime Rate Trends Over Time -->

    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/pieChart">Pie Charts</RouterLink>

      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>

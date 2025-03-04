<template>
  <div>

  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import {useRoute} frp, 'vue-router';

const route = useRoute();
const crimes = ref("");

async function getCrimes(){
  let res = await fetch('https://data.cityofnewyork.us/resource/bqiq-cu78.json');
  let data = await res.json();
  

  /* https://data.cityofnewyork.us/resource/bqiq-cu78.json */
}
</script>

<style scoped>

</style>
<template>
  <div class="">
    <CardContainer class="" v-for="(mon, index) in pokemon" 
    :key="mon.name" 
    :mon = "mon" 
    :index = "index"/>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import {useRoute} from 'vue-router';
import CardContainer from '@/components/CardContainer.vue';
const route = useRoute();
const crimes = ref("");

async function getCrimes(){
  let res = await fetch('https://data.cityofnewyork.us/resource/bqiq-cu78.json');
  let data = await res.json();
  crimes.value = data;
  
  /* https://data.cityofnewyork.us/resource/bqiq-cu78.json */
}

onMounted(()=>{
  getCrimes();
})
console.log(crimes.value);
</script>

<style scoped>

</style>
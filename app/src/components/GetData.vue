<template>
</template>

<script setup>
import {reactive, onMounted} from 'vue';
let data = reactive([]);

async function getCrimes(){
  try{
    let response = await fetch('https://data.cityofnewyork.us/resource/bqiq-cu78.json');
    if (response.status != 200){
      throw new Error(response);
    } 
    else{
      data = await response.json();
    }
  }
  catch(error){
    console.log(error);
    alert("no data")
  }
  
  /* https://data.cityofnewyork.us/resource/bqiq-cu78.json */
}

onMounted(()=>{
  getCrimes();
})

</script>

<style scoped>

</style>
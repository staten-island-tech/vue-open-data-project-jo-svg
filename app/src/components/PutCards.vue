<template>
    
    <div class="flex flex-wrap justify-around align-middle h-screen ">
        <div v-for="person in filteredData" 
        :key = "person.id"
        class="mt-10 w-[23%] bg-red-600">
            <h1>race: {{ person.race }}</h1>
            <h1>sex: {{ person.sex }}</h1>
            <h1>borough: {{ person.borough }}</h1>
            <h1>year: {{ person.year }}</h1>
            <h1>hiv_diagnoses_num: {{ person.hiv_diagnoses_num }}</h1>
            <h1>aids_diagnoses_num: {{ person.aids_diagnoses_num }}</h1>
        </div>
    </div>

</template>

<script setup>
import { data, getData} from '@/services/GetData';
import { onMounted, computed} from 'vue';
import { genderSelected, raceSelected } from '@/views/AllStats.vue';
const filteredData = computed(() => {
  return data.filter(person => {
    return (
      (raceSelected.value ? person.race === raceSelected.value : true) &&  // Only filter by race if it's set
      (genderSelected.value ? person.sex === genderSelected.value : true)  // Only filter by gender if it's set
    );
  });
});

async function loadData() {
  try {
    await getData(); 
    console.log("Data loaded successfully:", data);
  } catch (error) {
    alert('Failed to load data');
    console.error("Error loading data:", error);
  }
}
onMounted(()=>{
    loadData();
});
</script>

<style scoped>

</style>
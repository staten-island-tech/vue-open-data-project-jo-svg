<template>
    <div class="flex flex-wrap justify-around align-middle h-screen gap-y-6">
      <div  v-for="person in filteredData" 
      :key = "person.id"
      class="card bg-base-100 w-96 shadow-sm">
        <div class="card-body">
            <h1 class="card-title">Borough: {{ person.borough }}</h1>
            <h1>Race: {{ person.race }}</h1>
            <h1>Sex: {{ person.sex }}</h1>
            <h1>Year: {{ person.year }}</h1>
          <div class="card-actions justify-start">
            <button class="btn btn-primary">HIV Diagnoses Number: {{ person.hiv_diagnoses_num }}</button>
            <button class="btn btn-primary">AIDS Diagnoses Number: {{ person.aids_diagnoses_num }}</button>
          </div>
        </div>
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
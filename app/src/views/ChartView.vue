<template>
<div class=" h-screen w-[100%] bg-amber-400 flex flex-row justify-evenly">
    <div class="w-1/6 h-full flex flex-col justify-evenly">
        <YearSelector/>
        <div class="h-6/8 list bg-amber-100 rounded-box shadow-md flex flex-col items-center justify-evenly">
            <RaceSelector/>
            <genderSelector/>
        </div>
    </div>
    <div class="w-4/5 my-auto h-11/12 justify-center items-center flex py-4 bg-amber-100">
        <PieCharts/>
    </div>
</div>
</template>

<script setup>
import YearSelector from '@/components/YearSelector.vue';
import RaceSelector from '@/components/RaceSelector.vue';
import genderSelector from '@/components/GenderSelector.vue';
import PieCharts from '@/components/PieCharts.vue';
import { getData } from '@/services/GetData';
import {reactive, onMounted} from 'vue';
const data = reactive([]);




async function loadData() {
  try {
    await getData(); // fetch data and update the data array directly
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
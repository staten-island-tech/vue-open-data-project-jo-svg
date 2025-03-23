<template>
<div class=" h-screen w-[100%] bg-amber-800 flex flex-row justify-evenly">
    <div class="w-1/6 h-full flex flex-col justify-evenly">
        <YearSelector/>
        <div class="h-6/8 bg-amber-400 flex flex-col items-center justify-evenly">
            <RaceSelector :selected="raceSelected" @update:selected="updateraceSelected"/>
            genderSelected
        </div>
        
        
    </div>

    <div class="w-4/5 my-auto h-11/12 justify-center items-center flex py-4 bg-amber-100">
        <PieCharts/>
    </div>
</div>

</template>

<script setup>
import YearSelector from '@/components/YearSelector.vue';
import raceSelected from '@/components/RaceSelector.vue';
import genderSelected from '@/components/GenderSelector.vue';
import PieCharts from '@/components/PieCharts.vue';
import { getData } from '@/services/GetData';
import {reactive, onMounted, ref} from 'vue';

const data = reactive([]);
const raceSelected = ref("");
const genderSelected = ref("");
async function loadData() {
    try {
    data.push(...(await getData())); // Spread opperator, takes the array from getCrimes and puts it in data
  } catch (error) {
    alert('Failed to load data');
  }
}

onMounted(()=>{
    loadData();
});
console.log(data);

</script>

<style scoped>

</style>
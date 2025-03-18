<template>
<div class=" h-screen w-[100%] bg-amber-800 flex flex-row justify-evenly">
    <div class="w-1/6 h-full flex flex-col justify-evenly">
        <YearSelector/>
        <GenderRaceSelector/>
    </div>

    <div class="w-4/5 my-auto h-11/12 justify-center items-center flex py-4 bg-amber-100">
        <PieCharts/>
    </div>
</div>

</template>

<script setup>
import YearSelector from '@/components/YearSelector.vue';
import GenderRaceSelector from '@/components/GenderRaceSelector.vue';
import PieCharts from '@/components/PieCharts.vue';
import { getCrimes } from '@/services/GetData';
import {reactive, onMounted} from 'vue';

const data = reactive([]);

async function loadData() {
    try {
    data.push(...(await getCrimes())); // Spread opperator, takes the array from getCrimes and puts it in data
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
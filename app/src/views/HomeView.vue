<template>
<div class=" h-screen w-[100%] bg-amber-800 flex flex-row justify-evenly">
    <div class="w-1/5 h-full flex flex-col justify-evenly">
        <YearSelector/>
        <MonthSelector/>
    </div>

    <div class="w-3/4 my-auto h-11/12 bg-amber-100">
        <PieCharts/>
    </div>
</div>

</template>

<script setup>
import YearSelector from '@/components/YearSelector.vue';
import MonthSelector from '@/components/MonthSelector.vue';
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
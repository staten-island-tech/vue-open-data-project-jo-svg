<template>
<div class=" h-screen w-[100%] bg-amber-800 flex flex-row justify-evenly">
    <div class="w-1/5 h-full flex flex-col justify-evenly">
        <YearSelector/>
        <MonthSelector/>
    </div>
    <div class="w-3/4 my-auto h-11/12 bg-amber-100">

    </div>
</div>

</template>

<script setup>
import YearSelector from '@/components/YearSelector.vue';
import MonthSelector from '@/components/MonthSelector.vue';
</script>

<style scoped>

</style>
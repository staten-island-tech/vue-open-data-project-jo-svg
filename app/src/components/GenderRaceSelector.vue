<template>
<div class="h-6/8 bg-amber-400 flex flex-col items-center justify-evenly">
    <div class="Race flex flex-col items-center justify-evenly h-3/5 w-8/9 bg-blue-300">
        <h1>Race Ethnicity</h1>
        <button :class="{'bg-green-500': selectedMonth === 'January'}"  @click="selectingMonth('January')" class=" w-8/9 h-1/11 border-2 bg-transparent text-white hover:text-white hover:shadow-[inset_16rem_0_0_0] hover:shadow-green-500 duration-[400ms,700ms] transition-[color,box-shadow]">
            Black Non-Hispanic
        </button>
        <button :class="{'bg-green-500': selectedMonth === 'January'}"  @click="selectingMonth('January')" class=" w-8/9 h-1/11 border-2 bg-transparent text-white hover:text-white hover:shadow-[inset_16rem_0_0_0] hover:shadow-green-500 duration-[400ms,700ms] transition-[color,box-shadow]">
            White Non-Hispanic
        </button>
        <button :class="{'bg-green-500': selectedMonth === 'January'}"  @click="selectingMonth('January')" class=" w-8/9 h-1/11 border-2 bg-transparent text-white hover:text-white hover:shadow-[inset_16rem_0_0_0] hover:shadow-green-500 duration-[400ms,700ms] transition-[color,box-shadow]">
            Asian and Pacific Islander
        </button>
        <button :class="{'bg-green-500': selectedMonth === 'January'}"  @click="selectingMonth('January')" class=" w-8/9 h-1/11 border-2 bg-transparent text-white hover:text-white hover:shadow-[inset_16rem_0_0_0] hover:shadow-green-500 duration-[400ms,700ms] transition-[color,box-shadow]">
            Hispanic
        </button>
        <button :class="{'bg-green-500': selectedMonth === 'January'}"  @click="selectingMonth('January')" class=" w-8/9 h-1/11 border-2 bg-transparent text-white hover:text-white hover:shadow-[inset_16rem_0_0_0] hover:shadow-green-500 duration-[400ms,700ms] transition-[color,box-shadow]">
            Other Race/Ethnicity
        </button>
        <button :class="{'bg-green-500': selectedMonth === 'January'}"  @click="selectingMonth('January')" class=" w-8/9 h-1/11 border-2 bg-transparent text-white hover:text-white hover:shadow-[inset_16rem_0_0_0] hover:shadow-green-500 duration-[400ms,700ms] transition-[color,box-shadow]">
            Not Stated/Unknown
        </button>
    </div>
    <div class="flex flex-col items-center justify-evenly h-1/5 w-8/9 bg-amber-900">
        <button :class="{'bg-green-500': selectedMonth === 'January'}"  @click="selectingMonth('January')" class=" w-8/9 h-1/4 border-2 bg-transparent text-white hover:text-white hover:shadow-[inset_16rem_0_0_0] hover:shadow-green-500 duration-[400ms,700ms] transition-[color,box-shadow]">
            Female
        </button>
        <button :class="{'bg-green-500': selectedMonth === 'January'}"  @click="selectingMonth('January')" class=" w-8/9 h-1/4 border-2 bg-transparent text-white hover:text-white hover:shadow-[inset_16rem_0_0_0] hover:shadow-green-500 duration-[400ms,700ms] transition-[color,box-shadow]">
            Male
        </button>
    </div>
    
</div>
</template>

<script setup>
import { ref } from 'vue';

const selectedMonth = ref("January");

function selectingMonth(month) {
selectedMonth.value = month;
console.log(selectedMonth.value);
}
</script>

<style scoped>
</style>

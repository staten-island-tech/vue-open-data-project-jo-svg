<template>
<div class="h-6/8 bg-amber-400 flex flex-col items-center justify-evenly">
    <button :class="{'bg-green-500': selectedMonth === 'January'}"  @click="selectingMonth('January')" class="w-4/5 h-1/16 border-2 bg-transparent text-white hover:text-white hover:shadow-[inset_16rem_0_0_0] hover:shadow-green-500 duration-[400ms,700ms] transition-[color,box-shadow]">
        January
    </button>
    <button @click="selectingMonth('February')" class="w-4/5 h-1/16 border-2 bg-transparent text-white hover:text-white hover:shadow-[inset_16rem_0_0_0] hover:shadow-green-500 duration-[400ms,700ms] transition-[color,box-shadow]">
        February
    </button>
    <button @click="selectingMonth('March')" class="w-4/5 h-1/16 border-2 bg-transparent text-white hover:text-white hover:shadow-[inset_16rem_0_0_0] hover:shadow-green-500 duration-[400ms,700ms] transition-[color,box-shadow]">
        March
    </button>
    <button @click="selectingMonth('April')" class="w-4/5 h-1/16 border-2 bg-transparent text-white hover:text-white hover:shadow-[inset_16rem_0_0_0] hover:shadow-green-500 duration-[400ms,700ms] transition-[color,box-shadow]">
        April
    </button>
    <button @click="selectingMonth('May')" class="w-4/5 h-1/16 border-2 bg-transparent text-white hover:text-white hover:shadow-[inset_16rem_0_0_0] hover:shadow-green-500 duration-[400ms,700ms] transition-[color,box-shadow]">
        May
    </button>
    <button @click="selectingMonth('June')" class="w-4/5 h-1/16 border-2 bg-transparent text-white hover:text-white hover:shadow-[inset_16rem_0_0_0] hover:shadow-green-500 duration-[400ms,700ms] transition-[color,box-shadow]">
        June
    </button>
    <button @click="selectingMonth('July')" class="w-4/5 h-1/16 border-2 bg-transparent text-white hover:text-white hover:shadow-[inset_16rem_0_0_0] hover:shadow-green-500 duration-[400ms,700ms] transition-[color,box-shadow]">
        July
    </button>
    <button @click="selectingMonth('August')" class="w-4/5 h-1/16 border-2 bg-transparent text-white hover:text-white hover:shadow-[inset_16rem_0_0_0] hover:shadow-green-500 duration-[400ms,700ms] transition-[color,box-shadow]">
        August
    </button>
    <button @click="selectingMonth('September')" class="w-4/5 h-1/16 border-2 bg-transparent text-white hover:text-white hover:shadow-[inset_16rem_0_0_0] hover:shadow-green-500 duration-[400ms,700ms] transition-[color,box-shadow]">
        September
    </button>
    <button @click="selectingMonth('October')" class="w-4/5 h-1/16 border-2 bg-transparent text-white hover:text-white hover:shadow-[inset_16rem_0_0_0] hover:shadow-green-500 duration-[400ms,700ms] transition-[color,box-shadow]">
        October
    </button>
    <button @click="selectingMonth('November')" class="w-4/5 h-1/16 border-2 bg-transparent text-white hover:text-white hover:shadow-[inset_16rem_0_0_0] hover:shadow-green-500 duration-[400ms,700ms] transition-[color,box-shadow]">
        November
    </button>
    <button @click="selectingMonth('December')" class="w-4/5 h-1/16 border-2 bg-transparent text-white hover:text-white hover:shadow-[inset_16rem_0_0_0] hover:shadow-green-500 duration-[400ms,700ms] transition-[color,box-shadow]">
        December
    </button>
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

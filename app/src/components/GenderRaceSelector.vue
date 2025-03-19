<template>
<div class="h-6/8 bg-amber-400 flex flex-col items-center justify-evenly">
    <div class="Race flex flex-col items-center justify-evenly h-3/5 w-8/9 bg-blue-300">
        <h1>Race Ethnicity</h1>
        <button :class="{'bg-green-500': selected === 'January'}"  @click="selecting('Black Non-Hispanic')" class=" w-8/9 h-1/11 border-2 bg-transparent text-white hover:text-white hover:shadow-[inset_16rem_0_0_0] hover:shadow-green-500 duration-[400ms,700ms] transition-[color,box-shadow]">
            Black Non-Hispanic
        </button>
        <button :class="{'bg-green-500': selected === 'January'}"  @click="selecting('White Non-Hispanic')" class=" w-8/9 h-1/11 border-2 bg-transparent text-white hover:text-white hover:shadow-[inset_16rem_0_0_0] hover:shadow-green-500 duration-[400ms,700ms] transition-[color,box-shadow]">
            White Non-Hispanic
        </button>
        <button :class="{'bg-green-500': selected === 'January'}"  @click="selecting('Asian and Pacific Islander')" class=" w-8/9 h-1/11 border-2 bg-transparent text-white hover:text-white hover:shadow-[inset_16rem_0_0_0] hover:shadow-green-500 duration-[400ms,700ms] transition-[color,box-shadow]">
            Asian and Pacific Islander
        </button>
        <button :class="{'bg-green-500': selected === 'January'}"  @click="selecting('Hispanic')" class=" w-8/9 h-1/11 border-2 bg-transparent text-white hover:text-white hover:shadow-[inset_16rem_0_0_0] hover:shadow-green-500 duration-[400ms,700ms] transition-[color,box-shadow]">
            Hispanic
        </button>
        <button :class="{'bg-green-500': selected === 'January'}"  @click="selecting('Other Race/Ethnicity')" class=" w-8/9 h-1/11 border-2 bg-transparent text-white hover:text-white hover:shadow-[inset_16rem_0_0_0] hover:shadow-green-500 duration-[400ms,700ms] transition-[color,box-shadow]">
            Other Race/Ethnicity
        </button>
        <button :class="{'bg-green-500': selected === 'January'}"  @click="selecting('Not Stated/Unknown')" class=" w-8/9 h-1/11 border-2 bg-transparent text-white hover:text-white hover:shadow-[inset_16rem_0_0_0] hover:shadow-green-500 duration-[400ms,700ms] transition-[color,box-shadow]">
            Not Stated/Unknown
        </button>
    </div>
    <div class="flex flex-col items-center justify-evenly h-1/5 w-8/9 bg-pink-500">
        <h1>Sex</h1>
        <button :class="{'bg-green-500': selected === 'January'}"  @click="selecting('Female')" class=" w-8/9 h-1/4 border-2 bg-transparent text-white hover:text-white hover:shadow-[inset_16rem_0_0_0] hover:shadow-green-500 duration-[400ms,700ms] transition-[color,box-shadow]">
            Female
        </button>
        <button :class="{'bg-green-500': selected === 'January'}"  @click="selecting('Male')" class=" w-8/9 h-1/4 border-2 bg-transparent text-white hover:text-white hover:shadow-[inset_16rem_0_0_0] hover:shadow-green-500 duration-[400ms,700ms] transition-[color,box-shadow]">
            Male
        </button>
    </div>
    
</div>
</template>

<script setup>
import { ref } from 'vue';

const selected = ref("");

function selecting(item) {
selected.value = item;
console.log(selected.value);
}
</script>

<style scoped>
</style>

<template>
<div class="h-6/8 bg-amber-400 flex flex-col items-center justify-evenly">
    <div class="Race flex flex-col items-center justify-evenly h-3/5 w-8/9 bg-blue-300">
        <h1>Race Ethnicity</h1>
        <button :class="{'bg-green-500': selected === 'Black Non-Hispanic'}"  @click="selecting('Black Non-Hispanic')" class="flex justify-center align-middle w-8/9 h-1/11 border-2 bg-transparent text-white hover:text-white hover:shadow-[inset_16rem_0_0_0] hover:shadow-green-500 duration-[400ms,700ms] transition-[color,box-shadow]">
            Black Non-Hispanic
        </button>
        <button :class="{'bg-green-500': selected === 'White Non-Hispanic'}"  @click="selecting('White Non-Hispanic')" class=" w-8/9 h-1/11 border-2 bg-transparent text-white hover:text-white hover:shadow-[inset_16rem_0_0_0] hover:shadow-green-500 duration-[400ms,700ms] transition-[color,box-shadow]">
            White Non-Hispanic
        </button>
        <button :class="{'bg-green-500': selected === 'Asian and Pacific Islander'}"  @click="selecting('Asian and Pacific Islander')" class=" w-8/9 h-1/11 border-2 bg-transparent text-white hover:text-white hover:shadow-[inset_16rem_0_0_0] hover:shadow-green-500 duration-[400ms,700ms] transition-[color,box-shadow]">
            Asian and Pacific Islander
        </button>
        <button :class="{'bg-green-500': selected === 'Hispanic'}"  @click="selecting('Hispanic')" class=" w-8/9 h-1/11 border-2 bg-transparent text-white hover:text-white hover:shadow-[inset_16rem_0_0_0] hover:shadow-green-500 duration-[400ms,700ms] transition-[color,box-shadow]">
            Hispanic
        </button>
        <button :class="{'bg-green-500': selected === 'Other Race/Ethnicity'}"  @click="selecting('Other Race/Ethnicity')" class=" w-8/9 h-1/11 border-2 bg-transparent text-white hover:text-white hover:shadow-[inset_16rem_0_0_0] hover:shadow-green-500 duration-[400ms,700ms] transition-[color,box-shadow]">
            Other Race/Ethnicity
        </button>
        <button :class="{'bg-green-500': selected === 'Not Stated/Unknown'}"  @click="selecting('Not Stated/Unknown')" class=" w-8/9 h-1/11 border-2 bg-transparent text-white hover:text-white hover:shadow-[inset_16rem_0_0_0] hover:shadow-green-500 duration-[400ms,700ms] transition-[color,box-shadow]">
            Not Stated/Unknown
        </button>
    </div>
    <div class="flex flex-col items-center justify-evenly h-1/5 w-8/9 bg-pink-500">
        <h1>Sex</h1>
        <button :class="{'bg-green-500': selected === 'Female'}"  @click="selecting('Female')" class="flex align-middle justify-center w-8/9 h-1/4 border-2 bg-transparent text-white hover:text-white hover:shadow-[inset_16rem_0_0_0] hover:shadow-green-500 duration-[400ms,700ms] transition-[color,box-shadow]">
            Female
        </button>
        <button :class="{'bg-green-500': selected === 'Male'}"  @click="selecting('Male')" class=" w-8/9 h-1/4 border-2 bg-transparent text-white hover:text-white hover:shadow-[inset_16rem_0_0_0] hover:shadow-green-500 duration-[400ms,700ms] transition-[color,box-shadow]">
            Male
        </button>
    </div>
    
</div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
    selected: {
        type: String,
        required: true,
    }
});

const emit = defineEmits(['update:selected']);

function selecting(item) {
    emit('update:selected', item);
    console.log(item);
}
</script>

<style scoped>
</style>

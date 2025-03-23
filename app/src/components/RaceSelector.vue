<template>
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
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
    raceSelected: {
        type: String,
        required: true,
    }
});

const emit = defineEmits(['update:raceSelected']);

function selecting(item) {
    emit('update:raceSelected', item);
    console.log(item);
}
</script>

<style lang="scss" scoped>

</style>
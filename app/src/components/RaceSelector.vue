<template>
<div class="Race flex flex-col items-center justify-evenly h-3/5 w-8/9 bg-blue-300">
    <h1>Race Ethnicity</h1>
    <button
      v-for="race in races"
      :key="race"
      @click="selecting(race)"
      class="w-8/9 h-1/11 border-2 bg-transparent text-white hover:text-white hover:shadow-[inset_16rem_0_0_0] hover:shadow-green-500 duration-[400ms,700ms] transition-[color,box-shadow] flex justify-center items-center"
    >
      {{ race }}
    </button>
</div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
const races = [
  "Black Non-Hispanic",
  "White Non-Hispanic",
  "Asian and Pacific Islander",
  "Hispanic",
  "Other Race/Ethnicity",
  "Not Stated/Unknown"
];
const props = defineProps({
    selected: {
      type: String,
      required: true,
    }
});

const emit = defineEmits();

function selecting(item) {
  emit('update:raceSelected', item);
  console.log(item);
}
</script>

<style lang="scss" scoped>

</style>
<template>
<div class="Race flex flex-col items-center justify-evenly h-3/5 w-8/9 list bg-amber-200 rounded-box shadow-md">
    <h1>Race Ethnicity</h1>
    <button
      v-for="race in races"
      :key="race"
      @click="setRace(race)"
      class="w-8/9 h-1/11 border-2 bg-transparent text-black hover:text-white hover:shadow-[inset_16rem_0_0_0] hover:shadow-amber-500 duration-[400ms,700ms] transition-[color,box-shadow] flex justify-center items-center"
    >
      {{ race }}
    </button>
</div>
</template>

<script setup>
import { setRace } from '@/services/StoreStuff';
const races = [
  "Black",
  "White",
  "Asian/Pacific\nIslander",
  "Latino/Hispanic",
  "Other/Unknown",
];

</script>

<style lang="scss" scoped>

</style>
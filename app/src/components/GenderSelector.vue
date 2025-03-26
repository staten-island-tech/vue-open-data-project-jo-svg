<template>
<div class="flex flex-col items-center justify-evenly h-1/5 w-8/9 list bg-amber-200 rounded-box shadow-md">
    <h1>Sex</h1>
    <button
      v-for="gender in genders"
      :key="gender"
      @click="setGender(gender)"
      class="w-8/9 h-1/5 border-2 bg-transparent text-balck hover:text-white hover:shadow-[inset_16rem_0_0_0] hover:shadow-amber-500 duration-[400ms,700ms] transition-[color,box-shadow] flex justify-center items-center"
    >
      {{ gender }}
    </button>
</div>
</template>

<script setup>

import { setGender } from '@/services/StoreStuff';

const genders = [
  "Female",
  "Male",
  "All"
];
</script>

<style lang="scss" scoped>

</style>
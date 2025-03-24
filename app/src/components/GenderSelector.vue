<template>
<div class="flex flex-col items-center justify-evenly h-1/5 w-8/9 bg-pink-500">
    <h1>Sex</h1>
    <button
      v-for="gender in genders"
      :key="gender"
      @click="selecting(gender)"
      class="w-8/9 h-1/4 border-2 bg-transparent text-white hover:text-white hover:shadow-[inset_16rem_0_0_0] hover:shadow-green-500 duration-[400ms,700ms] transition-[color,box-shadow] flex justify-center items-center"
    >
      {{ gender }}
    </button>
</div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';
const genders = [
  "Female",
  "Male",
  "All"
];
const props = defineProps({
    selected: {
        type: String,
        required: true,
    }
});

const emit = defineEmits(['update:genderSelected']);

function selecting(item) {
    emit('update:genderSelected', item);
    console.log(item);
}
</script>

<style lang="scss" scoped>

</style>
<template>
<div class="years section bg-amber-500 h-1/5 flex items-center">
    <button @click="changenum('<')" class="btn-circle cursor-pointer"><</button>
    <h1 class=" text-8xl">{{year}}</h1>
    <button @click="changenum('>')" class="btn-circle cursor-pointer">></button>
</div>
</template>

<script setup>
import {ref} from "vue";
const year = ref(2019);
function changenum(btn){
    if (btn === ">"){
        year.value += 1;
    }
    else if (btn === "<"){
        year.value -= 1;
    }
};
</script>

<style scoped>

</style>
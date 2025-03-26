<template>
<div class="years section bg-amber-100 h-1/7 flex flex-row items-center justify-center list rounded-box shadow-md">
    <button @click="changenum('<')" class="btn-circle cursor-pointer text-4xl"><</button>
    <h1 class=" text-8xl">{{year}}</h1>
    <button @click="changenum('>')" class="btn-circle cursor-pointer text-4xl">></button>
</div>
</template>

<script setup>
import {ref} from "vue";
import { year } from "@/services/StoreStuff";
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
<template>
  <div class="bg-amber-400 overflow-scroll">
    <div class="flex flex-row justify-center w-1/5 justify-self-center m-3">
        <div class="dropdown dropdown-hover ">
            <div tabindex="0" role="button" class="btn m-1">Gender</div>
            <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li v-for="gender in genders" @click="check(gender)"><a>{{gender}}</a></li>
            </ul>
        </div>
        <div class="dropdown dropdown-hover">
            <div tabindex="0" role="button" class="btn m-1">Race</div>
            <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li v-for="race in races" @click="check(race)"><a>{{race}}</a></li>
            </ul>
        </div>
        
    </div>
    <PutCards/>
  </div>
</template>

<script>
export const raceSelected = ref("");
export const genderSelected = ref("");
</script>

<script setup>
import { data, getData} from '@/services/GetData';
import { onMounted, ref } from 'vue';
import PutCards from '@/components/PutCards.vue';

const genders = [
  "Female",
  "Male",
  "All"
];
const races = [
  "Black",
  "White",
  "Asian/Pacific\nIslander",
  "Latino/Hispanic",
  "Other/Unknown",
];

function check(cat){
    if (races.includes(cat)){
      raceSelected.value = cat;
      console.log(raceSelected.value);
    }
    else if (genders.includes(cat)){
        genderSelected.value = cat;
        console.log(genderSelected.value);
    }
}
async function loadData() {
  try {
    await getData(); // fetch data and update the data array directly
    console.log("Data loaded successfully:", data);
  } catch (error) {
    alert('Failed to load data');
    console.error("Error loading data:", error);
  }
}
onMounted(()=>{
    loadData();
});
</script>

<style scoped>

</style>
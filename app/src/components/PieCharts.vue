<template>
  <!-- Pie chart component -->
   <div class="flex absolute top-1/6 right-10">
    <button class="btn" @click="chartType = 'pie'">Pie Chart</button>
    <button class="btn" @click="chartType = 'bar'">Bar Chart</button>
   </div>
  

  
    <Pie v-if="dataLoaded && chartType==='pie'" :data="data1" :options="options" />
  
    
      <Bar v-if="dataLoaded && chartType==='bar'" :data="data1" :options="options" />
  
    

  <!-- <Bar :data="data" :options="options" /> -->
</template>

<script setup>
import { ref, onMounted, computed} from 'vue';
import { Pie, Bar } from 'vue-chartjs';
import { genderSelected, raceSelected } from '@/services/StoreStuff';
import { getData, data, getBoroughs, boroughs} from '@/services/GetData';
import { year } from '@/services/StoreStuff';
// Register the necessary components for Pie charts
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Register the necessary chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale);
const chartType = ref('pie');  
const dataLoaded = ref(false);
const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Crime Distribution by Category',
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          return `Value: ${tooltipItem.raw}`;
        },
      },
    },
  },
};
function getTheAmountOfPeople(yearValue, gender, race){
  const people = [];
  data.forEach(person => {
    if (
      String(yearValue).trim().includes(person.year) &&
      (gender ? gender === (person.sex):true) &&
      (race ? race === (person.race):true)
    ){
      people.push(person);
    };
  });
  console.log(people);
  return people;
}

const data1 = computed(() => {
  const newData = {
    labels: boroughs,
    datasets: [
      {
        label: 'HIV Diagnoses by Category',
        data: boroughs.map(borough =>
        {const filteredByBorough = getTheAmountOfPeople(year.value, genderSelected.value, raceSelected.value)
            .filter(item => item.borough === borough);
            return filteredByBorough.length/2;}
        ),
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
        hoverOffset: 8,
      },
    ],
  };
  return newData;
});

onMounted(async () => {
  try {
    await getData();
    await getBoroughs();
    dataLoaded.value = true;
  } catch (error) {
    console.error('Error loading data:', error);
  }
});
</script>

<style scoped></style>

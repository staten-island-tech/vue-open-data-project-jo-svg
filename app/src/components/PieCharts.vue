<template>
  <!-- Pie chart component -->
  <button>pie</button>
  <button>bar</button>
  <Pie v-if="dataLoaded" :key="dataLoaded" :data="data1" :options="options" />
  <!-- <Bar :data="data" :options="options" /> -->
</template>

<script setup>
import { ref, onMounted, watch, nextTick} from 'vue';
import { Pie } from 'vue-chartjs';
import { Bar } from 'vue-chartjs';
import { genderSelected, raceSelected } from '@/services/StoreStuff';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { getData, data, getBoroughs, boroughs} from '@/services/GetData';
import { year } from '@/services/StoreStuff';
// Register the necessary components for Pie charts
ChartJS.register(Title, Tooltip, Legend, ArcElement);
const data1 = ref(null);
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
function getTheAmountOfPeople(area, year, gender, race){
  let amount = 0;
  data.forEach(person => {
    if (
      (person.borough === area) &&
      (person.year === year) &&
      (gender ? person.sex === gender : true) &&  // Only filter by gender if it's set
      (race ? person.race === race : true)      // Only filter by race if it's set
    ){
      amount++;
    };
  });
  return amount;
}
function updateChartData() {
  const newData = {
    labels: boroughs,
    datasets: [
      {
        label: 'HIV Diagnoses by Category',
        data: boroughs.map(borough => getTheAmountOfPeople(borough, year.value, genderSelected.value, raceSelected.value)),
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
        hoverOffset: 8,
      },
    ],
  };
  console.log("yes",data1);
  data1.value = newData;
  nextTick(() => {dataLoaded.value = true;});
}
onMounted(async () => {
  try {
    await getData();
    await getBoroughs();
    updateChartData();
    dataLoaded.value = true;
    console.log("yes",data1);
  } catch (error) {
    console.error('Error loading data:', error);
  }
});
watch([genderSelected, raceSelected], () => {
  console.log("Watch triggered...");
  console.log("genderSelected in watch:", genderSelected.value);
  console.log("raceSelected in watch:", raceSelected.value);
  updateChartData();
});
</script>

<style scoped></style>

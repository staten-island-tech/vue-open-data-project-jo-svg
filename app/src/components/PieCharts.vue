<template>
  <!-- Pie chart component -->
  <Pie :data="data1" :options="options" />
  <!-- <Bar :data="data" :options="options" /> -->
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Pie } from 'vue-chartjs';
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { getDeathTypes } from '@/services/GetData';
import { getData, data, deathTypes } from '@/services/GetData';
/* import {getCrimes} from '/src/service/GetData.js'; */


onMounted(async ()=>{ 
  await getData();
  await getDeathTypes();
})


// Register the necessary components for Pie charts
ChartJS.register(Title, Tooltip, Legend, ArcElement);

const data1 = ref({
  labels: deathTypes,
  datasets: [
    {
      label: 'Crime Count',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
      ],
      hoverOffset: 8,
    },
  ],
});

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
</script>

<style scoped></style>

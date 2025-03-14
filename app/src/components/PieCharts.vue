<template>
    <Bar :data="data" :options="options" />
  <!-- you put chart here based off of the amount of crimes 
  made in this year and month -->
  
</template>

<script setup>
import { defineProps, ref} from 'vue';
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

defineProps ({
  
})

const data = ref({
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [{
    label: 'Test Dataset',
    data: [10, 20, 30],
    backgroundColor: ['#FF5733', '#33FF57', '#3357FF']
  }]
});
const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Sample Bar Chart'
    },
    tooltip: {
      callbacks: {
        label: function(tooltipItem) {
          return `Value: ${tooltipItem.raw}`;
        }
      }
    }
  },
  scales: {
    x: {
      beginAtZero: true
    },
    y: {
      beginAtZero: true
    }
  }
};
const config = {
  type: 'doughnut',
  data: data,
  options: options
};
</script>

<style scoped>

</style>
import {reactive} from 'vue';

let data = reactive({});
let deathTypes = reactive({});
export async function getData() {
    try {
      const response = await fetch('https://data.cityofnewyork.us/resource/jb7j-dtam.json');
  
      if (response.status !== 200) {
        throw new Error(`Error: ${response.statusText}`);
      }
      else{
        data = [];
        data = await response.json();
      }
    } catch (error) {
      console.error('Failed to fetch crimes:', error);
      throw error; 
    }
}

async function getDeathTypes(){
  deathTypes = [];
  data.forEach(cause => {
    if (cause.leading_cause === deathTypes){
      return;
    }
  });
}
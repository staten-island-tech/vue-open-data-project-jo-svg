import {reactive} from 'vue';

export let data = reactive([]);
export let deathTypes = reactive([]);
export async function getData() {
    try {
      const response = await fetch('https://data.cityofnewyork.us/resource/jb7j-dtam.json?$limit=200');
      if (response.status != 200) {
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

export async function getDeathTypes(){
  deathTypes = [];
  data.forEach(cause => {
    if (!deathTypes.includes(cause.leading_cause)) {
      deathTypes.push(cause.leading_cause);  }
  });
}
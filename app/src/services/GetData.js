import {reactive} from 'vue';

export const data = reactive([]);
export const boroughs = reactive([]);
export async function getData() {
    try {
      const response = await fetch('https://data.cityofnewyork.us/resource/ykvb-493p.json');
      /* use if needed ?$limit=200 */
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      else{
        data.length = 0;
        const NewData = await response.json();
        console.log(NewData); 
        NewData.forEach((item)=> data.push(item));
      }
    } catch (error) {
      console.error('Failed to fetch crimes:', error);
      throw error; 
    }
}
export async function getBoroughs(){
  boroughs.length = 0;
  data.forEach(person => {
    if (!boroughs.includes(person.borough)) {
      boroughs.push(person.borough);}
  });
} 
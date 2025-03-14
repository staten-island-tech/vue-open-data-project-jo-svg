export async function getCrimes() {
    try {
      const response = await fetch('https://data.cityofnewyork.us/resource/bqiq-cu78.json');
  
      if (response.status !== 200) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error('Failed to fetch crimes:', error);
      throw error; 
    }
}
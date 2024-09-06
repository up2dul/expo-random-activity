import type { Activity } from './types';

const BASEURL = 'https://bored-api.appbrewery.com';

export async function getRandomActivity() {
  try {
    const response = await fetch(`${BASEURL}/random`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const jsonData: Activity = await response.json();
    return jsonData;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

import getData from './getData';
import processData from './processData';
import displayManager from './displayManager';

export default async function wrapProcess(location, days) {
    const weather = await getData(location, days);
    const weatherData = await processData(weather);
    displayManager(weatherData)
}
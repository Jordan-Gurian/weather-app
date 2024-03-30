export default async function getData(location, days) {

    // Defining API Key in file is VERY bad, but allowed here only
    const key = '7fe74af7926f4d43a7b151008242903';
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=${days}`, {
            mode: 'cors'
        });
        const weather = await response.json();
        return weather;
    } catch {
        throw Error("Invalid API key or inputs");
    }
}
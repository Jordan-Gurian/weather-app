export default function processData(response) {
    const processedData = {};
    processedData.name = response.location.name;
    processedData.country = response.location.country;
    processedData.date = response.location.localtime;
    processedData.tempC = response.current.temp_c;
    processedData.tempF = response.current.temp_f;
    processedData.condition = response.current.condition.text;
    processedData.feelsLikeC = response.current.feelslike_c;
    processedData.feelsLikeF = response.current.feelslike_f;
    processedData.humidity = response.current.humidity;
    processedData.windSpd = response.current.wind_mph;
    processedData.uv = response.current.uv;

    const forecastDay = response.forecast.forecastday;
    const days = [];
    const obj = {};
    forecastDay.forEach((item) => {
        obj.date = item.date;
        obj.maxTempC = item.day.maxtemp_c;
        obj.maxTempF = item.day.maxtemp_f;
        obj.minTempC = item.day.mintemp_c;
        obj.minTempF = item.day.mintemp_f;
        obj.chanceRain = item.day.daily_chance_of_rain;
        obj.sunrise = item.astro.sunrise;
        obj.sunset = item.astro.sunset;
        days.push(obj);
    })

    processedData.forecastdays = days;

    return processedData

}
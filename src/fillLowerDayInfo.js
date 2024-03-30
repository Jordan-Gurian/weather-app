export default function fillLowerDayInfo(weather) {
    const sunrise = document.querySelector('.sunrise');
    const sunset = document.querySelector('.sunset');
    const rain = document.querySelector('.chance-rain');
    const humidity = document.querySelector('.humidity');
    const wind = document.querySelector('.wind');
    const uv = document.querySelector('.uv');

    sunrise.textContent = weather.forecastdays[0].sunrise;
    sunset.textContent = weather.forecastdays[0].sunset;
    rain.textContent = `${weather.forecastdays[0].chanceRain}%`;
    humidity.textContent = `${weather.humidity}%`;
    wind.textContent = weather.windSpd;
    uv.textContent = weather.uv;
}
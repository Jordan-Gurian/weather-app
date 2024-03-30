export default function fillMain(weather) {
    const temp = document.querySelector('.temp');
    const condition = document.querySelector('.condition');
    const maxTemp = document.querySelector('.max-temp');
    const minTemp = document.querySelector('.min-temp');
    const feelsLike = document.querySelector('.feelslike');

    temp.textContent = weather.tempF;
    condition.textContent = weather.condition;
    maxTemp.textContent = weather.forecastdays[0].maxTempF;
    minTemp.textContent = weather.forecastdays[0].minTempF;
    feelsLike.textContent = weather.feelsLikeF;

}
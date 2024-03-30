export default function fillForecast(weather) {
    const forecast = document.querySelector('.forecast');
    forecast.innerHTML = '';
    weather.forecastdays.forEach((day) => {
        const thisDay = document.createElement('div');
        const date = document.createElement('div');
        const condition = document.createElement('div');
        const maxLabel = document.createElement('div');
        const minLabel = document.createElement('div');
        const maxTemp = document.createElement('div');
        const minTemp = document.createElement('div');
        const rain = document.createElement('div');

        thisDay.classList.add('day');
        date.classList.add('date');
        condition.classList.add('condition');
        maxLabel.classList.add('max', 'temp-label');
        minLabel.classList.add('min', 'temp-label');
        maxTemp.classList.add('max-temp');
        minTemp.classList.add('min-temp');
        rain.classList.add('chance-rain');

        date.textContent = day.date;
        condition.textContent = day.condition;
        maxLabel.textContent = 'MAX';
        minLabel.textContent = 'MIN';
        maxTemp.textContent = day.maxTempF;
        minTemp.textContent = day.minTempF;
        rain.textContent = `${day.chanceRain}%`;

        forecast.appendChild(thisDay);
        thisDay.appendChild(date);
        thisDay.appendChild(condition);
        thisDay.appendChild(maxLabel);
        thisDay.appendChild(minLabel);
        thisDay.appendChild(maxTemp);
        thisDay.appendChild(minTemp);
        thisDay.appendChild(rain);

        
    });
}
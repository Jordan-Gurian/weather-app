export default function createHeader(weather) {
        const location = document.querySelector('.location');
        const day = document.querySelector('.date');
        location.textContent = `${weather.name}, ${weather.country}`;
        day.textContent = weather.date;
}
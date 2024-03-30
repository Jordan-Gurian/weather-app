import "./style.css";
import "normalize.css";
import wrapProcess from './wrapProcess';

const FORECAST_DAYS = 2;
const weatherData = wrapProcess('london', FORECAST_DAYS);

console.log(weatherData)

const form = document.querySelector('form');
form.onsubmit = (event) => {
    event.preventDefault()
    const location = document.querySelector('#location').value;
    const newOne = wrapProcess(location, FORECAST_DAYS);
    console.log(newOne);
}
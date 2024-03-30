import "./style.css";
import "normalize.css";
import wrapProcess from './wrapProcess';

const FORECAST_DAYS = 5;
wrapProcess('london', FORECAST_DAYS);

const form = document.querySelector('form');
form.onsubmit = (event) => {
    event.preventDefault()
    const location = document.querySelector('#location').value;
    wrapProcess(location, FORECAST_DAYS);
}


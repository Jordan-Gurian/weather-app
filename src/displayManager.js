import createHeader from './createHeader'
import fillMain from './fillMain';
import fillLowerDayInfo from './fillLowerDayInfo';
import fillForecast from './fillForecast';

export default function displayManager(weather) {
    createHeader(weather);
    fillMain(weather);
    fillLowerDayInfo(weather);
    fillForecast(weather);
}
import createHeader from './createHeader'
import fillMain from './fillMain';
import fillLowerDayInfo from './fillLowerDayInfo';

export default function displayManager(weather) {
    createHeader(weather);
    fillMain(weather);
    fillLowerDayInfo(weather);
}
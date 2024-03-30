import createHeader from './createHeader'
import fillMain from './fillMain';

export default function displayManager(weather) {
    createHeader(weather);
    fillMain(weather);
}
import dateTime from './modules/date.js';
import eventControl from './modules/bookShelling.js';
import Navigation from './modules/nav.js';

dateTime();

const navi = new Navigation();
navi.view();
eventControl();
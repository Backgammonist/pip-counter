/* eslint no-console: "off" */

require('offline-plugin/runtime').install();

const count = require('./count');

let mainState = count.shuffle();

console.log('state', mainState);

console.log(count.printPip('player', mainState));
console.log(count.printPip('opponent', mainState));

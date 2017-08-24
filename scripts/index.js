/* eslint no-console: "off" */

const count = require('./count');

let mainState = count.shuffle();

console.log(mainState);

console.log(count.printPip('player', mainState));
console.log(count.printPip('opponent', mainState));
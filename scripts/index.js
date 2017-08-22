const count = require('./count');

let mainState = count.shuffle()

console.log(count.printPip('player', mainState))
console.log(count.printPip('opponent', mainState))
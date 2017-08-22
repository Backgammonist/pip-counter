const count = require('../../scripts/count');
const state = require('../../fixtures/state');

test('print pip', () => {
    const userType = 'player';
    const text =  `${userType}: 15 | 167`;
    expect(count.printPip('player', state)).toBe(text);
});

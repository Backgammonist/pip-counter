const state = require('../fixtures/state')

/**
 * 
 * @param {string} userType player || opponent
 * @param {array} state game state
 * @return {number}
 */
function countPip(userType, state) {
    const currentState = immutableObject(state)
    return Object.keys(currentState).reduce((sum, key) => {
        const pointVal = (userType === 'player') ? key : Math.abs(key - 25)
        const checkerAtPosition  = (userType in currentState[key]) ? currentState[key][userType] : 0
        return sum + parseInt(pointVal, 10) * checkerAtPosition
    }, 0)
}

/**
 * Returns a new object based on the input value
 * @param {object} state original state
 * @return {object} new state object
 */
function immutableObject(state) {
    return Object.assign({}, state)
}

console.log('player: ', countPip('player', state))
console.log('opponent: ', countPip('opponent', state))
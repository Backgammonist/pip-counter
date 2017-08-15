const state = require('../fixtures/state')

/**
 * Count checkers in game based on the user's type
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
 * Return a new object based on the input value
 * @param {object} state initial state
 * @return {object} new state object
 */
function immutableObject(state) {
    return Object.assign({}, state)
}
/**
 * Return an empty state objects
 * @param {object} state initial state
 * @return {object} new state
 */
function emptyState(state) {
    let currentState = immutableObject(state)

    for (let item of Object.keys(currentState)) {
        currentState[item] = {}
    }

    return currentState
}

function printPip(userType) {
    console.log(`${userType}: ${countPip(userType, state)}`)
}

printPip('player')
printPip('opponent')

const INITIAL_STATE = require('../fixtures/state')
const _ = require('lodash')

const MAX_CHECKER_ON_POS = 6

/**
 * Count the point value of checkers in game based on the user's type
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
 * Count checkers in game based on the user's type
 * @param {string} userType player || opponent
 * @param {array} state game state
 * @return {number}
 */
function countCheckers(userType, state) {
    const currentState = immutableObject(state)

    return Object.keys(currentState).reduce((sum, key) => {
        const checkerAtPosition  = (userType in currentState[key]) ? currentState[key][userType] : 0
        return sum + checkerAtPosition
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
/**
 * allocate checkers to slots
 * @param {boolean} secondRun has to run twice (player, opponent)
 * @param {object} state game state
 */
function shuffle(secondRun, state) {
    const userType = secondRun ? 'opponent' : 'player'
    let checkerCount = 15
    let currentState = state || emptyState(INITIAL_STATE)

    while (checkerCount > 0) {
        const checkersOnPos = getCheckersOnPos(checkerCount)
        const pos = findRandEmpty(currentState)
        currentState[pos][userType] = checkersOnPos
        checkerCount -= checkersOnPos
    }

    if (!secondRun) {
        shuffle(true, currentState)
    }

    return currentState
}
/**
 * returns a random amount from the unallocated checkers
 * making sure that the return amount never gets bigger than `MAX_CHECKER_ON_POS`
 * @param {number} checkerCount number of unallocated checkers
 * @return {number} number of checkers
 */
function getCheckersOnPos(checkerCount) {
    const checkers = Math.ceil(Math.random() * checkerCount)
    return (checkers > MAX_CHECKER_ON_POS) ? MAX_CHECKER_ON_POS : checkers
}
/**
 * return the key of a random non-empty slot of the given state
 * @param {object} state 
 * @return {number} key of the slot
 */
function findRandEmpty(state) {
    return _.shuffle(Object.keys(state)).find(key => _.isEmpty(state[key]))
}

function printPip(userType, state) {
    return `${userType}: ${countCheckers(userType, state)} | ${countPip(userType, state)}`
}

module.exports = {
    printPip,
    shuffle,
    emptyState
}

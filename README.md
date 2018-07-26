# Backgammon PIP counter #

[![Build Status](https://travis-ci.org/Backgammon-Bandits/pip-counter.svg?branch=master)](https://travis-ci.org/Backgammon-Bandits/pip-counter)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

[live demo](https://backgammon-bandits.github.io/pip-counter/)

> _PIP counting is an essential skill for a good backgammon player. It could affect the player's strategy during the game. With practise it gets easier to have a clear view on the positions._

### 🏗️ Development ###

Running the up in local environment: 
1. clone the repo
2. `$ yarn`
3. `$ yarn dev`

Run eslint against the `/src` folder:

`$ yarn eslint`

### 🚀 Deployment ###

1. `$ yarn build`
2. commit the changes in the `/dist` folder
3. `$ yarn deploy` (or `git push origin `git subtree split --prefix dist master`:gh-pages --force`)

### :green_apple: Testing ###
Unit testing is done using [jest](https://facebook.github.io/jest/) mainly for its amazing automocking feature

run unit all tests:
`$ yarn test`

run unit test with coverage:
`$ yarn test:coverage`

setup test watch:
`$ yarn test:watch`
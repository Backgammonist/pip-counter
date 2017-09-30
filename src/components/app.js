import React, { Component } from 'react';
import {shuffle} from '../services/count';

import Board from './board';

require('./App.scss');

const initialState = shuffle();

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Board {...initialState} />
            </div>
        );
    }
}

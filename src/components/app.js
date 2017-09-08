import React, { Component } from 'react';
import './App.css';
import {shuffle} from '../count';

import Board from './Board.js';


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

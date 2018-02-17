import React, { Component } from 'react';
import { shuffle } from '../services/count';

import Board from './board';
import Dashboard from './dashboard';

require('./App.scss');

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isDashBoardVisible: false,
            board: shuffle(),
        };

        this.onClick = this.onClick.bind(this);
        this.shuffle = this.shuffle.bind(this);
    }

    onClick() {
        this.setState(() => {
            return {
                isDashBoardVisible: !this.state.isDashBoardVisible
            };
        });
    }

    shuffle() {
        this.setState(() => {
            return {
                isDashBoardVisible: false,
                board: shuffle(),
            };
        });
    }


    render() {
        return (
            <div className="App" onClick={this.onClick}>
                <Board initialState={this.state.board} />
                {this.state.isDashBoardVisible && (
                    <Dashboard initialState={this.state.board} shuffle={this.shuffle} />
                )}
            </div>
        );
    }
}

import React, { PureComponent } from 'react';

import Checker from '../checkers';

import { countPip } from '../../services/count';

import './dashboard.scss';

class Dashboard extends PureComponent {
    render() {
        return (
            <div className="dashboard">
                <div className="dashboard__scores">
                    <div className="dashboard__score">
                        <Checker key="opponent-checker" playerType="opponent" />
                        <strong>{countPip('opponent', this.props.initialState)}</strong>
                    </div>
                    <div className="dashboard__score">
                        <Checker key="player-checker" playerType="player" />
                        <strong>{countPip('player', this.props.initialState)}</strong>
                    </div>
                </div>
                <div>
                    <button onClick={this.props.shuffle}>shuffle</button>
                </div>
            </div>
        );
    }
}

export default Dashboard;

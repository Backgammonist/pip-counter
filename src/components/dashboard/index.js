import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';

import Checker from '../checkers';

import { countPip } from '../../services/count';

import './dashboard.scss';

class Dashboard extends PureComponent {
    render() {
        const opponentPip = countPip('opponent', this.props.initialState)
        const playerPip = countPip('player', this.props.initialState)
        const diffPip = playerPip - opponentPip

        return (
            <div className="dashboard">
                <div className="dashboard__scores">
                    <div className="dashboard__score">
                        <Checker key="opponent-checker" playerType="opponent" />
                        <strong>{opponentPip}</strong>
                        <div className="dashboard__scores--percent">({Math.round(opponentPip/ (opponentPip + playerPip) * 100)}%)</div>
                    </div>
                    <div className={`dashboard__diff ${diffPip > 0 ? 'green': 'red'}`}>
                        {diffPip > 0 ? `+${diffPip}` : diffPip}
                    </div>
                    <div className="dashboard__score">
                        <Checker key="player-checker" playerType="player" />
                        <strong>{playerPip}</strong>
                        <div className="dashboard__scores--percent">({Math.round(playerPip/ (opponentPip + playerPip) * 100)}%)</div>
                    </div>
                </div>
                <div>
                    <button onClick={this.props.shuffle}>shuffle</button>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    initialState: PropTypes.object.isRequired,
    shuffle: PropTypes.func.isRequired,
};

export default Dashboard;

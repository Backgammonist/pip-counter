import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import './checker.css';

class Checker extends PureComponent {
    render () {
        return (
            <div className={`checker checker-${this.props.playerType === 'player' ? 'white': 'black'}`}></div>
        );
    }
}

Checker.propTypes = {
    playerType: PropTypes.string
};

export default  Checker;

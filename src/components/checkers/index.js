import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import './checker.scss';

class Checker extends PureComponent {
    render () {
        return (
            <div className={`checker checker__${this.props.playerType}`}></div>
        );
    }
}

Checker.propTypes = {
    playerType: PropTypes.string
};

export default  Checker;

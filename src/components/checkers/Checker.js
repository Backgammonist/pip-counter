import React, { PureComponent } from 'react';
import './checker.css';

class Checker extends PureComponent {
    render () {
        return (
            <div className={`checker checker-${this.props.playerType === 'player' ? 'white': 'black'}`}></div>
        )
    }
}

export default  Checker;

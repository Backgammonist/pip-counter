import PropTypes from 'prop-types';

import React, { PureComponent } from 'react';

import Checker from '../checkers';

require('./field.scss');

class Field extends PureComponent {

    render() {
        const {
            ordinal,
            player,
            opponent
        } = this.props;

        let checkers = [];
        if (player || opponent) {
            const playerType = this.props.player ? 'player' : 'opponent';
            for (var index = 0; index <this.props[playerType];  index++ ) {
                checkers.push(<Checker key={index} playerType={playerType} />);
            }
        }

        return (
            <div className={`field-wrapper field-wrapper__${ordinal%2 === 0 ? 'pair' : 'odd'}`}>
                <div className="field-ordinal">
                    <span>{ordinal}</span>
                </div>
                <div>
                    {checkers}
                </div>
            </div>
        );
    }
}

Field.propTypes = {
    ordinal: PropTypes.string,
    player: PropTypes.number,
    opponent: PropTypes.number
};

export default Field;

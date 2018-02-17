import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';

import Field from '../field';

require('./board.scss');

class Board extends PureComponent {
    render() {
        const fieldKeys = Object.keys(this.props.initialState);
        return (
            <div className="board" onClick={this.onClick}>
                <div className="board--half board--half__lower">
                    {fieldKeys.slice(0, fieldKeys.length/2).map(key => <Field key={key} {...this.props.initialState[key]} ordinal={key} />)}
                </div>
                <div className="board-bar"></div>
                <div className="board--half board--half__upper">
                    {fieldKeys.slice(fieldKeys.length/2, fieldKeys.length).map(key => <Field key={key} {...this.props.initialState[key]} ordinal={key} />)}
                </div>
            </div>
        );
    }
}

Board.propTypes = {
    initialState: PropTypes.object.isRequired,
};

export default Board;

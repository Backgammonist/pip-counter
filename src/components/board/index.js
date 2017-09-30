import React, { PureComponent } from 'react';

import Field from '../field/index';

require('./board.scss');

class Board extends PureComponent {
    render() {
        const fieldKeys = Object.keys(this.props);
        return (
            <div className="board">
                <div className="board--half board--half__lower">
                    {fieldKeys.slice(0, fieldKeys.length/2).map(key => <Field key={key} {...this.props[key]} ordinal={key} />)}
                </div>
                <div className="board-bar"></div>
                <div className="board--half board--half__upper">
                    {fieldKeys.slice(fieldKeys.length/2, fieldKeys.length).map(key => <Field key={key} {...this.props[key]} ordinal={key} />)}
                </div>
            </div>
        );
    }
}

export default Board;

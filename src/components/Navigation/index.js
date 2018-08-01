import React from "react";

import PropTypes from "prop-types";
import posed from "react-pose";
import { BooleanValue } from "react-values";

import Modal from "../Modal";
import Checker from "../checkers";
import { countPip } from '../../services/count';

import "./navigation.scss";

const NavButton = posed.div({
  open: { scale: 0, opacity: 0, "z-index": 2 },
  close: { scale: 1, opacity: 1, "z-index": 3 }
});

const CloseButton = posed.div({
  close: { scale: 0, opacity: 0, "z-index": 2 },
  open: { scale: 1, opacity: 1, "z-index": 3 }
});

const Navigation = (props) => (
  <BooleanValue>
    {({ value: open, toggle }) => (
      <React.Fragment>
        <NavButton
          className="navigation__btn"
          pose={open ? "open" : "close"}
          onClick={toggle}
        >
          <svg height="32" width="32" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 10h24a2 2 0 0 0 0-4H4a2 2 0 0 0 0 4zm24 4H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4zm0 8H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4z" />
          </svg>
        </NavButton>
        <CloseButton
          className="navigation__btn"
          pose={open ? "open" : "close"}
          onClick={toggle}
        >
          <svg height="32" width="32" xmlns="http://www.w3.org/2000/svg">
            <path d="M28 14H18V4a2 2 0 0 0-4 0v10H4a2 2 0 0 0 0 4h10v10a2 2 0 0 0 4 0V18h10a2 2 0 0 0 0-4z" />
          </svg>
        </CloseButton>
        <Modal open={open}>
            <div className="dashboard__scores">
                    <div className="dashboard__score">
                        <Checker key="opponent-checker" playerType="opponent" />
                        <strong>{countPip('opponent', props.initialState)}</strong>
                    </div>
                    <div className="dashboard__score">
                        <Checker key="player-checker" playerType="player" />
                        <strong>{countPip('player', props.initialState)}</strong>
                    </div>
                </div>
                <div>
                    <button onClick={props.shuffle}>shuffle</button>
                </div>
            <ul>
                <li>
                    <a>PIP counter</a>
                </li>
                <li>
                    <a className="not-available">editor</a>
                </li>
                <li>
                    <a className="not-available">elo score tracker</a>
                </li>
            </ul>
        </Modal>
      </React.Fragment>
    )}
  </BooleanValue>
);

Navigation.propTypes = {
  shuffle: PropTypes.func.isRequired,
  initialState: PropTypes.object
};

export default Navigation;

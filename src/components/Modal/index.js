import React from "react";

import PropTypes from "prop-types";

import posed from "react-pose";

import "./modal.scss";

const ModalPose = posed.div({
  opened: { opacity: 0.95 },
  closed: { opacity: 0 }
});

const Modal = props => {
  return (
    <ModalPose className="modal" pose={props.open ? "opened" : "closed"}>
        {props.children}
    </ModalPose>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default Modal;

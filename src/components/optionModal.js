import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel={"Selected Option"}
    onRequestClose={props.wipeoutOptionDialog}
    closeTimeoutMS={200}
    className="modal"
  >
    <h2 className="modal_title">Selected Option</h2>
    {props.selectedOption && (
      <h1 className="modal-body">{props.selectedOption}</h1>
    )}
    <button className="button" onClick={props.wipeoutOptionDialog}>
      Okey !
    </button>
  </Modal>
);

export default OptionModal;

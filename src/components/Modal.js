import React from "react";
import ReactDOM from "react-dom";
import history from "../history";

const Modal = props => {
  // portal will insert/render JSX inside the DOM object referenced
  return ReactDOM.createPortal(
    <div
      // dimmer click redirects to root page
      onClick={() => history.push("/")}
      className="ui dimmer modals visible active"
    >
      <div
        // stop redirect event propagation to parent dimmer div
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">Delete Stream</div>
        <div className="content">
          Are you sure you want to delete this stream?
        </div>
        <div className="actions">
          <button className="ui primary button">Delete</button>
          <button className="ui button">Cancel</button>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;

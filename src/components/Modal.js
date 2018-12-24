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
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;

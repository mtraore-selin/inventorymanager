import React from "react";
import "./States.scss";
import { WRONG_MSG } from "../../constants";

const Error = () => {
  return (
    <div className="card">
      <div className="container">
        <div
          className="content"
          style={{ backgroundColor: "#e6bfbf", border: "2px red dotted" }}
        >
          <div className="error-text">{WRONG_MSG}!</div>
        </div>
      </div>
    </div>
  );
};

export default Error;

import React from "react";
import "./Error.css";

const Error = props => {
  return (
    <div className={props.className}>
      <div className="error">
        <p className="error_text">Ошибка: {props.message}</p>
      </div>
    </div>
  );
};
export default Error;

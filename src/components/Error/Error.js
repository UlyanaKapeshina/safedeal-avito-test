import React from "react";
import "./Error.css";

const Error = props => {
  return (
    <div className={props.className}>
      <div>Ошибка: {props.message}</div>
    </div>
  );
};
export default Error;

import React from "react";
import "./Square.css";

const Square = ({sign, onClickManager}) => (

  <button className={"square"} onClick={onClickManager}>
      {sign}
  </button>
);

export default Square;
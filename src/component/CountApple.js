import { useState } from "react";

const CountApple = (props) => {
  return (
    <>
      <div className="countapple">
        <h1>{props.Basket}</h1>
        <h3>{props.count}</h3>
      </div>
    </>
  );
};

export default CountApple;

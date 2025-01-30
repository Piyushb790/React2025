import { useState } from "react";

const state = [0, "param"];

const BehindState = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("pawan");
  console.log("render");
  return (
    <>
      <h1>{count}</h1>
      <h1>{name}</h1>
      <button
        onClick={() => {
          //   alert("1st time setting count" + count);
          //   setCount(count + 1);
          //   alert("2nd time setting count" + count);
          //   setCount(count + 4);
          //   alert("3rd time setting count" + count);
          //   setCount(count + 100);
          //   alert("1st setting name");
          //   setName("prakash");
          //   alert("2nd setting name");
          //   setName("param");
          alert("1st time setting count" + count);
          setCount((previousState) => previousState + 1);
          alert("2nd time setting count" + count);
          setCount((previousState) => previousState + 20);
          alert("3rd time setting count" + count);
          setCount((previousState) => previousState + 23);
        }}
      >
        click
      </button>
    </>
  );
};
export default BehindState;

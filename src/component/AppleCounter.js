import Button from "./Buttons";
import CountApple from "./CountApple";
import left from "../Assets/left.png";
import right from "../Assets/right.png";
import { useState } from "react";

const AppleCounter = () => {
  const totalCount = 10;
  const [rightCount, setRightCount] = useState(0);
  const [leftCount, setLeftCount] = useState(totalCount - rightCount);

  function leftClickHandler() {
    if (rightCount > 0) {
      setLeftCount(leftCount + 1);
      setRightCount(rightCount - 1);
    }
  }

  function rightClickHandler() {
    if (leftCount > 0) {
      setRightCount(rightCount + 1);
      setLeftCount(leftCount - 1);
    }
  }

  return (
    <div className="applecounter">
      <CountApple Basket="Left Basket Count" count={leftCount} />
      <Button btnImg={left} title="left" countHandler={leftClickHandler} />
      <Button btnImg={right} title="right" countHandler={rightClickHandler} />
      <CountApple Basket="Right Basket Count" count={rightCount} />
    </div>
  );
};

export default AppleCounter;

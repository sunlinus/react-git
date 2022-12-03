import React, { useState } from "react";

function ChangeColor() {
  const [click, setClick] = useState(false);

  const clickHandler = () => {
    setClick((prevState) => (prevState = !prevState));
  };
  return (
    <>
      <div>Update state</div>
      <button
        onClick={clickHandler}
        style={{ backgroundColor: click ? "red" : "green" }}
      >
        Click Me
      </button>
    </>
  );
}

export default ChangeColor;

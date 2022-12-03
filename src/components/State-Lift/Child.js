import React from "react";

function Child(props) {
  const clickHandler = () => {
    props.onForward(
      "button clicked in the child component but displayed in the parent component"
    );
  };
  return <button onClick={clickHandler}>Send Data to Parent</button>;
}

export default Child;

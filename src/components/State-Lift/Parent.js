import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [msg, setMsg] = useState("");

  const forwardHandler = (data) => {
    setMsg(data);
  };
  return (
    <>
      <div>Lifting state up</div>
      <div>{msg}</div>
      <Child onForward={forwardHandler} />
    </>
  );
}

export default Parent;

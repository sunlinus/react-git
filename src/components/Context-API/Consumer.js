import React, { useContext } from "react";
import Mycontext from "./my-context";

function Consumer() {
  const myCtx = useContext(Mycontext);

  return (
    <div>{myCtx.loginStatus ? "LOGGED IN" : "LOGGED OUT"}</div>
    // <Mycontext.Consumer>
    //   {(myCtx) => {
    //     return <div>{myCtx.loginStatus ? "LOGGED IN" : "LOGGED OUT"}</div>;
    //   }}
    // </Mycontext.Consumer>
  );
}

export default Consumer;

import { useDispatch, useSelector } from "react-redux";
import React from "react";

function Counter() {
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const increaseHandler = () => {
    dispatch({ type: "increase", amount: 10 });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const toggleHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <div>
      {show && <p>{counter}</p>}
      <button onClick={incrementHandler}>increment</button>{" "}
      <button onClick={increaseHandler}>increase</button>{" "}
      <button onClick={decrementHandler}>decrement</button>{" "}
      <button onClick={toggleHandler}>toggle</button>
    </div>
  );
}

export default Counter;

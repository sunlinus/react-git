import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "./store";

function CounterToolkit() {
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleHandler = () => {
    dispatch(counterActions.toggle());
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

export default CounterToolkit;

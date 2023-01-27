import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store";

const Counter = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter);
  const show = useSelector(state => state.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };
  const decreaseHandler = () => {
    dispatch(counterActions.decrease(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{count}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <div>
        <button onClick={increaseHandler}>increment by 5</button>
        <button onClick={decreaseHandler}>decrement by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const incrementHanlder = () => {
    dispatch({ type: "increment" });
  };

  const incrementHanlder5 = () => {
    dispatch({ type: "increaseby5" });
  };

  const decrementHanlder = () => {
    dispatch({ type: "decrement" });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div className="counter">
        <button onClick={incrementHanlder}>Increment</button>
        <button onClick={incrementHanlder5}>Increment by 5</button>
        <button onClick={decrementHanlder}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementHanlder() {
//     this.props.increment();
//   }

//   decrementHanlder() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {
//     this.props.toggleCounter();
//   }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div className="counter">
//           <button onClick={this.incrementHanlder.bind(this)}>Increment</button>
//           <button onClick={this.decrementHanlder.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

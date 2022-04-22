import React from "react";
import "../css/Counter.css";
import { useState } from "react";

function Counter(props) {
  const [counter, setCounter] = useState(0);

  return (
    <div className="counter">
      <h1>Counter APP Internship Task</h1>
      <span>{counter}</span>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        +
      </button>
      <button onClick={() => setCounter((prevCount) => prevCount === 0)}>
        Reset
      </button>
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
        -
      </button>
    </div>
  );
}
export default Counter;

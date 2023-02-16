import React, { Fragment } from "react";
import "../App.css";

export default function Counter() {
  const [count, setCount] = React.useState(0);
  function increment() {
    setCount(count + 1);
  }
  return (
    <Fragment>
      <div className="Counter">
        <h1>Counter : {count}</h1>
        <button onClick={increment}>Click</button>
      </div>
    </Fragment>
  );
}

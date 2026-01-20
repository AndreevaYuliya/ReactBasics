import React, { useState } from "react";

import increaseIcon from "./assets/increase.svg";
import decreaseIcon from "./assets/decrease.svg";

const Counter = ({ initialCount = 0, title }) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className="counterCard">
      <h2>{title}</h2>

      <p className="counterValue">{count}</p>

      <div className="buttonsContainer">
        <button onClick={increment}>
          <span>Increment</span>

          <img src={increaseIcon} alt="Increase icon" />
        </button>

        <button onClick={decrement}>
          <span>Decrement</span>

          <img src={decreaseIcon} alt="Decrease icon" />
        </button>
      </div>
    </div>
  );
};

const Wrapper = ({ pageTitle, children }) => {
  return (
    <div className="wrapper">
      <h1>{pageTitle}</h1>

      <div className="content">{children}</div>
    </div>
  );
};

const App = () => {
  return (
    <Wrapper pageTitle="Counters App">
      <Counter initialCount={2} title="First counter" />
      <Counter initialCount={-3} title="Second counter" />
    </Wrapper>
  );
};

export default App;

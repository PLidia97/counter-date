import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("june 25 2024");
  date.setDate(date.getDate() + count);

  function handleCount(e) {
    setCount(e.target.value);
  }

  function handleStep(e) {
    setStep(e.target.value);
  }

  return (
    <div className="counter">
      <div>
        <input type="range" min="0" max="10" onChange={handleStep} />
        <span>{step}</span>
      </div>

      <div>
        <button
          className="countButton"
          onClick={() => setCount((c) => c - step)}
        >
          -
        </button>
        <input type="text" onChange={handleCount} />

        <button
          className="countButton"
          onClick={() => setCount((c) => c + step)}
        >
          +
        </button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from today is`
            : `${Math.abs(count)} days ago was`}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      <button
        className="resetButton"
        onClick={() => {
          setCount(0);
          setStep(1);
        }}
      >
        Reset
      </button>
    </div>
  );
};

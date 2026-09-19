import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function decrementCount() {
    setCount(prevCount => prevCount - 1);
  }

  function decrementCountByTwo() {
    setCount(prevCount => prevCount - 2);
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1);
  }

  function incrementCountByTwo() {
    setCount(prevCount => prevCount + 2);
  }

  function resetCount() {
    if (count === 0) return alert("Count is already 0");
    setCount(0);
  }

  function setUserCount() {
  const newCount = prompt("Enter new count");

  if (newCount === null) {
    alert("You cancelled the operation");
    return;
  }

  if (newCount === "") {
    alert("You entered an empty count");
    return;
  }

  const parsedCount = Number(newCount);

  if (Number.isNaN(parsedCount)) {
    alert("You entered an invalid number");
    return;
  }

  if (parsedCount === count) {
    alert("You entered the same count");
    return;
  }

  setCount(parsedCount);
}

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>

      <button onClick={decrementCount}>
        -1
      </button>

      <button onClick={decrementCountByTwo}>
        -2
      </button>

      <button onClick={incrementCount}>
        +1
      </button>

      <button onClick={incrementCountByTwo}>
        +2
      </button>

      <button onClick={resetCount}>
        Reset
      </button>

      <button onClick={setUserCount}>
        Set Count
      </button>
    </div>
  );
}

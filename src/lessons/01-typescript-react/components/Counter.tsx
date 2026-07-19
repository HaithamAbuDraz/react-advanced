import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </div>
  );
}

export default Counter;

import { useEffect, useState } from 'react';

export default function NoDepsExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Runs after EVERY render. count =', count);
  }); // ⚠️ no array

  return (
    <section>
      <h2>1- No dependency array</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>
        count: {count}
      </button>
    </section>
  );
}

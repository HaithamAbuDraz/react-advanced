import { useEffect, useState } from 'react';

export default function CleanupExample() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // cleanup runs on unmount AND before the next effect run
    return () => window.clearInterval(id);
  }, []);

  return (
    <section>
      <h2>4- Cleanup (interval)</h2>
      <p>Elapsed: {seconds}s</p>
    </section>
  );
}

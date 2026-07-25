import { useEffect, useRef, useState } from 'react';

function Stopwatch() {
  const [seconds, setSeconds] = useState<number>(0);
  const intervalRef = useRef<number | null>(null);

  const start = () => {
    if (intervalRef.current) return;
    intervalRef.current = window.setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const reset = () => {
    stop();
    setSeconds(0);
  };

  useEffect(() => {
    return () => stop();
  }, []);

  return (
    <div>
      <h2>Stopwatch</h2>
      <h2 style={{ fontSize: '2rem', }}>{seconds}s</h2>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button onClick={start} style={buttonStyle('#2ecc71')}>
          Start
        </button>
        <button onClick={stop} style={buttonStyle('#e74c3c')}>
          Stop
        </button>
        <button onClick={reset} style={buttonStyle('#f39c12')}>
          Reset
        </button>
      </div>
    </div>
  );
}

const buttonStyle = (bg: string) => ({
  padding: '0.5rem 1.5rem',
  backgroundColor: bg,
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: 'bold',
});

export default Stopwatch;

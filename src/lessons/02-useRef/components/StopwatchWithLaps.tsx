import { useEffect, useRef, useState } from "react";

function StopwatchWithLaps() {
  const [seconds, setSeconds] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);
  const [laps, setLaps] = useState<number[]>([]);
  const intervalRef = useRef<number | null>(null);

  const start = () => {
    if (running) return;
    setRunning(true);
    intervalRef.current = window.setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const pause = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setRunning(false);
  };

  const reset = () => {
    setSeconds(0);
    setLaps([]);
  };

  const recordLap = () => {
    if (running) {
      setLaps((prev) => [...prev, seconds]);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div style={{ maxWidth: "400px" }}>
      <h2>⏱️ Challenge 3: Stopwatch with Laps</h2>
      <h2 style={{ fontSize: "2.5rem", fontFamily: "monospace" }}>{seconds}s</h2>
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <button onClick={start} disabled={running} style={btnStyle("#2ecc71", running)}>Start</button>
        <button onClick={pause} disabled={!running} style={btnStyle("#e74c3c", !running)}>Pause</button>
        <button onClick={reset} style={btnStyle("#f39c12", false)}>Reset</button>
        <button onClick={recordLap} disabled={!running} style={btnStyle("#3498db", !running)}>Lap</button>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <h4>Laps</h4>
        {laps.length === 0 ? (
          <p style={{ color: "#7f8c8d" }}>No laps recorded yet.</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {laps.map((lap, index) => (
              <li key={index} style={{ padding: "0.25rem 0", borderBottom: "1px solid #eee" }}>
                Lap {index + 1}: {lap}s
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

const btnStyle = (bg: string, disabled: boolean) => ({
  padding: "0.5rem 1.5rem",
  backgroundColor: disabled ? "#bdc3c7" : bg,
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: disabled ? "not-allowed" : "pointer",
  fontWeight: "bold",
});

export default StopwatchWithLaps;
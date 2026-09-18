import { useEffect, useRef, useState } from "react";

function CharacterCounter() {
  const [text, setText] = useState<string>("");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const renderCount = useRef<number>(1);
  const maxChars = 150;

  useEffect(() => {
    renderCount.current += 1;
  });

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= maxChars) {
      setText(e.target.value);
    }
  };

  const clearText = () => {
    setText("");
    inputRef.current?.focus();
  };

  const remaining = maxChars - text.length;

  return (
    <div style={{ maxWidth: "450px" }}>
      <h2>📝 Challenge 1: Character Counter</h2>
      <p style={{ color: "#7f8c8d", marginBottom: "0.5rem" }}>
        Auto-focused on load. Tracks character count and component renders using <code>useRef</code>.
      </p>

      <textarea
        ref={inputRef}
        value={text}
        onChange={handleChange}
        placeholder="Type something here..."
        rows={5}
        style={{
          width: "100%",
          padding: "0.75rem",
          fontSize: "1rem",
          border: remaining <= 20 ? "2px solid #e74c3c" : "2px solid #3498db",
          borderRadius: "6px",
          resize: "none",
          outline: "none",
          boxSizing: "border-box",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "0.5rem",
        }}
      >
        <span
          style={{
            fontWeight: "bold",
            color: remaining <= 20 ? "#e74c3c" : "#2c3e50",
          }}
        >
          {text.length} / {maxChars} characters ({remaining} left)
        </span>

        <button
          onClick={clearText}
          disabled={text.length === 0}
          style={{
            padding: "0.4rem 1rem",
            backgroundColor: text.length === 0 ? "#bdc3c7" : "#e67e22",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: text.length === 0 ? "not-allowed" : "pointer",
            fontWeight: "bold",
          }}
        >
          Clear
        </button>
      </div>

      <div
        style={{
          marginTop: "1rem",
          padding: "0.5rem",
          backgroundColor: "#f8f9fa",
          borderRadius: "4px",
          borderLeft: "4px solid #2ecc71",
        }}
      >
        <small style={{ color: "#555" }}>
          {/* eslint-disable-next-line react-hooks/refs */}
          🔄 Component Render Count (via <code>useRef</code>): <strong>{renderCount.current}</strong>
        </small>
      </div>
    </div>
  );
}

export default CharacterCounter;

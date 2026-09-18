import { useRef } from "react";

function ScrollToTop() {
  const topRef = useRef<HTMLHeadingElement>(null);

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <h1 ref={topRef} >5. Scroll to Top</h1>
      <h2 style={{ color: "#2c3e50" }}>
        ⬆️ Top of Page
      </h2>
      <div style={{ height: "1200px", background: "linear-gradient(to bottom, #ecf0f1, #bdc3c7)" }}>
        <p style={{ padding: "1rem" }}>
          Scroll down to see the button that brings you back up.
        </p>
      </div>
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#3498db",
          color: "white",
          border: "none",
          borderRadius: "50px",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          fontSize: "1rem",
        }}
      >
        ⬆ Scroll to Top
      </button>
    </div>
  );
}

export default ScrollToTop;
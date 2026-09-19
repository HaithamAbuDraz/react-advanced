import { useLayoutEffect, useRef, useState } from "react";

function ElementMeasurement() {
  const boxRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  useLayoutEffect(() => {
    if (!boxRef.current) return;

    const rect = boxRef.current.getBoundingClientRect();
    setWidth(rect.width);
    setHeight(rect.height);
  }, []);

  return (
    <div>
      <h2>1. Element Measurement</h2>
      <div
        ref={boxRef}
        style={{
          width: "300px",
          height: "150px",
          padding: "20px",
          border: "2px solid #9b59b6",
          borderRadius: "8px",
          backgroundColor: "#f8f4fb",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
        }}
      >
        Measure Me
      </div>
      <p style={{ marginTop: "1rem" }}>
        📏 <strong>Width:</strong> {width.toFixed(2)}px
      </p>
      <p>
        📐 <strong>Height:</strong> {height.toFixed(2)}px
      </p>
    </div>
  );
}

export default ElementMeasurement;
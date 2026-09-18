import { useRef, useState } from "react";

function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const play = () => {
    videoRef.current?.play();
    setIsPlaying(true);
  };

  const pause = () => {
    videoRef.current?.pause();
    setIsPlaying(false);
  };

  const restart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div>
      <h2>🎬 Challenge 2: Video Player</h2>
      <video
        ref={videoRef}
        width="400"
        controls={false}
        style={{ borderRadius: "8px", marginBottom: "0.5rem" }}
      >
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button onClick={play} disabled={isPlaying} style={btnStyle("#2ecc71", isPlaying)}>
          ▶ Play
        </button>
        <button onClick={pause} disabled={!isPlaying} style={btnStyle("#e74c3c", !isPlaying)}>
          ⏸ Pause
        </button>
        <button onClick={restart} style={btnStyle("#f39c12", false)}>
          ⏹ Restart
        </button>
      </div>
      <p style={{ color: "#7f8c8d", fontSize: "0.9rem" }}>
        Status: {isPlaying ? "Playing" : "Paused"}
      </p>
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

export default VideoPlayer;
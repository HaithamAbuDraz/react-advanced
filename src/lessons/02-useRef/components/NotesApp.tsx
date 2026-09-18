import { useEffect, useRef, useState } from "react";

interface Note {
  id: number;
  text: string;
}

function NotesApp() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [input, setInput] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const lastNoteRef = useRef<HTMLDivElement>(null);
  const nextId = useRef<number>(1);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (notes.length > 0) {
      lastNoteRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [notes]);

  const addNote = () => {
    if (input.trim() === "") return;
    const newNote: Note = { id: nextId.current, text: input.trim() };
    setNotes((prev) => [...prev, newNote]);
    nextId.current += 1;
    setInput("");
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") addNote();
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h2>📝 Mini Project: Notes App</h2>
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Write a note..."
          style={{
            flex: 1,
            padding: "0.5rem",
            border: "2px solid #3498db",
            borderRadius: "4px",
            fontSize: "1rem",
          }}
        />
        <button
          onClick={addNote}
          style={{
            padding: "0.5rem 1.5rem",
            backgroundColor: "#2ecc71",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </div>

      <div style={{ maxHeight: "400px", overflowY: "auto", border: "1px solid #ddd", padding: "0.5rem", borderRadius: "4px" }}>
        {notes.length === 0 ? (
          <p style={{ color: "#bdc3c7", textAlign: "center" }}>No notes yet. Start writing!</p>
        ) : (
          notes.map((note, index) => (
            <div
              key={note.id}
              ref={index === notes.length - 1 ? lastNoteRef : null}
              style={{
                padding: "0.75rem",
                margin: "0.25rem 0",
                backgroundColor: "#f8f9fa",
                borderRadius: "4px",
                borderLeft: "4px solid #3498db",
              }}
            >
              {note.text}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default NotesApp;
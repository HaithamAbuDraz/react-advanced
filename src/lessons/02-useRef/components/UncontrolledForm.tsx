import { useRef } from 'react';

function UncontrolledForm() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    alert(`Hello, ${inputRef.current?.value || 'Anonymous'}!`);
  };

  return (
    <div>
      <h2>4. Uncontrolled Form</h2>
      <input
        ref={inputRef}
        type='text'
        placeholder='Your name'
        style={{
          padding: '0.5rem',
          fontSize: '1rem',
          border: '1px solid #ddd',
          borderRadius: '4px',
          marginRight: '0.5rem',
        }}
      />
      <button
        onClick={handleSubmit}
        style={{
          padding: '0.5rem 1.5rem',
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Submit
      </button>
      <p style={{ color: '#7f8c8d', marginTop: '0.5rem' }}>
        Using <code>useRef</code> – no re‑renders on input change.
      </p>
    </div>
  );
}

export default UncontrolledForm;

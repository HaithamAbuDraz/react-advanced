import { useEffect, useRef } from 'react';

function AutoFocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <h2>Auto‑Focus Input</h2>
      <input
        ref={inputRef}
        type='text'
        placeholder='Start typing...'
        style={{
          padding: '0.5rem',
          fontSize: '1rem',
          border: '2px solid #3498db',
          borderRadius: '4px',
          width: '300px',
        }}
      />
      <p style={{ color: '#7f8c8d', marginTop: '0.5rem' }}>
        Auto‑focused on page load.
      </p>
    </div>
  );
}

export default AutoFocusInput;

import { useState } from 'react';

interface TodoFormProps {
  onAdd: (title: string) => void;
}

function TodoForm({ onAdd }: TodoFormProps) {
  const [input, setInput] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      onAdd(input.trim());
      setInput('');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}
    >
      <input
        type='text'
        value={input}
        onChange={handleChange}
        placeholder='Add a new todo...'
        style={{
          flex: 1,
          padding: '0.5rem',
          border: '1px solid #ddd',
          borderRadius: '4px',
          fontSize: '1rem',
        }}
      />
      <button
        type='submit'
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#2ecc71',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;

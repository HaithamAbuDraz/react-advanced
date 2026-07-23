import { useState } from 'react';
import type { Todo } from '../types/Todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, newTitle: string) => void;
}

function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(todo.title);

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editText.trim()) {
      onEdit(todo.id, editText.trim());
      setIsEditing(false);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.5rem',
        margin: '0.25rem 0',
        backgroundColor: todo.completed ? '#f0f0f0' : 'white',
        borderRadius: '4px',
        border: '1px solid #ddd',
        transition: 'all 0.2s',
      }}
    >
      <input
        type='checkbox'
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        style={{ width: '20px', height: '20px', cursor: 'pointer' }}
      />

      {isEditing ? (
        <form
          onSubmit={handleEditSubmit}
          style={{ flex: 1, display: 'flex', gap: '0.5rem' }}
        >
          <input
            type='text'
            value={editText}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEditText(e.target.value)
            }
            style={{
              flex: 1,
              padding: '0.25rem',
              borderRadius: '4px',
              border: '1px solid #3498db',
            }}
            autoFocus
          />
          <button
            type='submit'
            style={{
              padding: '0.25rem 0.5rem',
              backgroundColor: '#2ecc71',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Save
          </button>
          <button
            type='button'
            onClick={() => {
              setIsEditing(false);
              setEditText(todo.title);
            }}
            style={{
              padding: '0.25rem 0.5rem',
              backgroundColor: '#95a5a6',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Cancel
          </button>
        </form>
      ) : (
        <>
          <span
            style={{
              flex: 1,
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? '#888' : 'inherit',
            }}
          >
            {todo.title}
          </span>
          <button
            onClick={() => setIsEditing(true)}
            style={{
              padding: '0.25rem 0.5rem',
              backgroundColor: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(todo.id)}
            style={{
              padding: '0.25rem 0.5rem',
              backgroundColor: '#e74c3c',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}

export default TodoItem;

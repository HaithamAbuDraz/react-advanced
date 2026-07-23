import { useState, useMemo } from 'react';
import type { Todo, TodoFilter } from '../types/Todo';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: 'Learn TypeScript', completed: true },
    { id: 2, title: 'Build React app', completed: false },
    { id: 3, title: 'Write documentation', completed: false },
  ]);

  const [filter, setFilter] = useState<TodoFilter>('all');
  const [nextId, setNextId] = useState<number>(4);

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  const activeCount = useMemo(() => {
    return todos.filter((todo) => !todo.completed).length;
  }, [todos]);

  const handleAdd = (title: string) => {
    const newTodo: Todo = {
      id: nextId,
      title,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    setNextId((prev) => prev + 1);
  };

  const handleToggle = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id: number, newTitle: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo,
      ),
    );
  };

  const handleClearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ margin: '0 0 1rem 0', color: '#2c3e50' }}>
        📝 Todo App
      </h2>
      <p style={{ color: '#7f8c8d', marginBottom: '1rem' }}>
        {activeCount} item{activeCount !== 1 ? 's' : ''} remaining
      </p>

      <TodoForm onAdd={handleAdd} />

      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          marginBottom: '1rem',
          flexWrap: 'wrap',
        }}
      >
        <button
          onClick={() => setFilter('all')}
          style={{
            padding: '0.25rem 0.75rem',
            backgroundColor: filter === 'all' ? '#3498db' : '#ecf0f1',
            color: filter === 'all' ? 'white' : 'inherit',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          All ({todos.length})
        </button>
        <button
          onClick={() => setFilter('active')}
          style={{
            padding: '0.25rem 0.75rem',
            backgroundColor: filter === 'active' ? '#3498db' : '#ecf0f1',
            color: filter === 'active' ? 'white' : 'inherit',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Active ({activeCount})
        </button>
        <button
          onClick={() => setFilter('completed')}
          style={{
            padding: '0.25rem 0.75rem',
            backgroundColor: filter === 'completed' ? '#3498db' : '#ecf0f1',
            color: filter === 'completed' ? 'white' : 'inherit',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Completed ({todos.length - activeCount})
        </button>
        <button
          onClick={handleClearCompleted}
          style={{
            padding: '0.25rem 0.75rem',
            backgroundColor: '#e74c3c',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginLeft: 'auto',
          }}
        >
          Clear Completed
        </button>
      </div>

      <div>
        {filteredTodos.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#888', padding: '2rem' }}>
            No todos to display
          </p>
        ) : (
          filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={handleToggle}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default TodoList;

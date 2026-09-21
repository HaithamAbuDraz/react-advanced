import { useEffect, useState } from 'react';

export default function FetchExample() {
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          'https://jsonplaceholder.typicode.com/todos/1',
          { signal: controller.signal },
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setTodo(data);
      } catch (e) {
        if (e.name !== 'AbortError') {
          setError(e.message);
        }
      } finally {
        setLoading(false);
      }
    };

    load();
    return () => controller.abort(); // cancel on unmount / dep change
  }, []);

  if (loading) return <p>Loading…</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <section>
      <h2>5- Data fetching</h2>
      <p>
        #{todo?.id} {todo?.title}
      </p>
    </section>
  );
}

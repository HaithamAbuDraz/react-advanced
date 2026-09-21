import { useEffect, useState } from 'react';

export default function WithDepsExample() {
  const [userId, setUserId] = useState(1);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log(`userId changed to ${userId}`);
    setName(`User #${userId}`);
  }, [userId]); // ✅ only re-run when userId changes

  function clickhandler() {
    setUserId((prev) => prev + 1);
  }
  return (
    <section>
      <h2>3- Dependency array</h2>
      <button onClick={clickhandler}>Next user</button>
      <p>Name: {name}</p>
    </section>
  );
}

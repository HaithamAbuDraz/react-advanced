import { useEffect, useState } from 'react';

export default function EmptyDepsExample() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    console.log('Runs once on mount');
    setMounted(true);
  }, []); // ✅ empty deps

  return (
    <section>
      <h2>2- Empty array (mount only)</h2>
      <p>Mounted: {String(mounted)}</p>
    </section>
  );
}

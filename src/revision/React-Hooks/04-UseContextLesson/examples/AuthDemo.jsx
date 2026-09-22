import AuthProvider from '../Provider/AuthProvider';
import useAuth from '../context/useAuth';

/* ---------- Consumers ---------- */

function Navbar() {
  const { user, login, logout } = useAuth();

  return (
    <nav style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      {user ? (
        <>
          <span>
            👤 {user.name} ({user.role})
          </span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={() => login('Alice')}>Login</button>
      )}
    </nav>
  );
}

function Profile() {
  const { user } = useAuth();
  if (!user) return <p>Please log in.</p>;
  return <p>Welcome, {user.name}!</p>;
}

/* ---------- Demo ---------- */

export default function AuthDemo() {
  return (
    <section style={{ marginTop: 24 }}>
      <h2>2- Auth demo</h2>
      <AuthProvider>
        <Navbar />
        <Profile />
      </AuthProvider>
    </section>
  );
}

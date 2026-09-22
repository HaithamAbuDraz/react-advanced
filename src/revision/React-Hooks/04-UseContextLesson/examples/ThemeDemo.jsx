import ThemeProvider from '../provider/ThemeProvider';
import useTheme from '../context/useTheme';

/* ---------- Deeply-nested consumer (no props passed) ---------- */

function Layout() {
  return <Sidebar />;
}

function Sidebar() {
  return <Menu />;
}

function Menu() {
  return <MenuItem />;
}

function MenuItem() {
  const { theme, toggleTheme } = useTheme();

  const styles = {
    background: theme === 'dark' ? '#222' : '#eee',
    color: theme === 'dark' ? '#fff' : '#000',
    padding: 10,
    borderRadius: 6,
    marginTop: 6,
  };

  return (
    <li style={styles}>
      Theme is <b>{theme}</b> <button onClick={toggleTheme}>toggle</button>
    </li>
  );
}

/* ---------- Demo ---------- */

export default function ThemeDemo() {
  return (
    <section style={{ marginTop: 24 }}>
      <h2>1- Theme demo (no prop drilling)</h2>
      <ThemeProvider>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <Layout />
        </ul>
      </ThemeProvider>
    </section>
  );
}

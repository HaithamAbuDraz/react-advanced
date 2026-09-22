import { useState, useMemo } from 'react';
import ThemeContext from '../context/ThemeContext';

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  // useMemo keeps object identity stable so consumers don't
  // re-render unless `theme` actually changes.
  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

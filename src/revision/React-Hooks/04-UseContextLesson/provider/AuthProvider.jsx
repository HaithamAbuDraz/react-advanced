import { useState, useMemo } from 'react';
import AuthContext from '../context/AuthContext';

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (name) => setUser({ name, role: 'admin' });
  const logout = () => setUser(null);

  const value = useMemo(() => ({ user, login, logout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

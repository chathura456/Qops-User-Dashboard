'use client'; // Important to indicate this is client-side code
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { createContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Check if the user is already logged in by reading the cookie
    const token = Cookies.get('token');
    const userData = Cookies.get('user');
    
    if (token && userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const login = (token, userData) => {
    // Save the token and user data in cookies
    Cookies.set('token', token, { expires: 7 }); // Token expires in 7 days
    Cookies.set('user', JSON.stringify(userData), { expires: 7 });
    setUser(userData);
  };

  const logout = () => {
    Cookies.remove('token');
    Cookies.remove('user');
    setUser(null);
    router.push('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

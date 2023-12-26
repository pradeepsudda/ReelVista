import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Perform your login logic here (e.g., make an API call)
    setUser(userData);
    console.log(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    // Perform your logout logic here
    setUser(null);
    localStorage.removeItem('user');
    console.log("user deleted");
  };

  return (
    <AuthContext.Provider value={{ user,login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

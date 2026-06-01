import React, { createContext, useState, ReactNode } from 'react';

// 1. Definimos los tipos de roles permitidos
export type UserRole = 'admin' | 'common' | null;

// 2. Definimos la estructura exacta del contexto
interface AuthContextType {
  isAuthenticated: boolean;
  userRole: UserRole;
  login: (role: 'admin' | 'common') => void;
  logout: () => void;
}

// Creación del contexto con un valor inicial indefinido pero tipado
export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userRole, setUserRole] = useState<UserRole>(null);

  const login = (role: 'admin' | 'common') => {
    setUserRole(role);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUserRole(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
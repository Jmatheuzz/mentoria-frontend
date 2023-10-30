import { createContext, useContext, useState, ReactNode } from 'react';
import { api } from '../services/api';
import { ResponseLogin, ResponseSignUp } from '../models/auth';

interface AuthContextType {
  user: {id: string, name: string} | null;
  login: (params: ParamsLogin) => Promise<void | {errorMessage: string}>;
  signUp: (params: ParamsSignUp) => Promise<void | { errorMessage: string; }>;
  logout: () => void;
  isAuthenticated: boolean;
}

type ParamsLogin = {
  email: string;
  password: string;
}
type ParamsSignUp = {
  name: string;
  email: string;
  password: string;
}




const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<{id: string, name: string} | null>(null);

  const login = async (params: ParamsLogin): Promise<void | { errorMessage: string; }> => {
    try {
        const {data} = await api.post<ResponseLogin>('/login', params);
        localStorage.setItem('access_token', data.access_token)
        setUser({id: data.id, name: data.name})
    } catch (error: any) {
        return {errorMessage: error.response}
    }
  };
  const signUp = async (params: ParamsSignUp): Promise<void | { errorMessage: string; }> => {
    try {
        await api.post<ResponseSignUp>('/sign-up', params);
    } catch (error: any) {
        return {errorMessage: error.response}
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('access_token');
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, signUp, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

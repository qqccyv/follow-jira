import React, { ReactNode, useContext, useState } from 'react';
import * as Auth from '../auth-provider';
export interface AuthForm {
  username: string,
  password: string
}
export interface IAuthContext {
  user: Auth.User | null,
  login: (params: AuthForm) => Promise<void>,
  register: (params: AuthForm) => Promise<void>,
  logout: () => Promise<void>,
}
const AuthContext = React.createContext<IAuthContext | undefined>(undefined);
AuthContext.displayName = 'AuthContext'

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<Auth.User | null>(null);
  const login = (params: AuthForm) => Auth.login(params).then(setUser)
  const register = (params: AuthForm) => Auth.register(params).then(setUser)
  const logout = () => Auth.logout().then(() => {
    setUser(null)
  })

  return <AuthContext.Provider children={children} value={{ user, login, register, logout }}></AuthContext.Provider>
}


export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth必须在Authprovier中使用");

  } else {
    return context
  }
}



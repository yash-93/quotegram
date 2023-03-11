import { createContext } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  username: null,
  email: null,
  login: () => { },
  logout: () => { }
});

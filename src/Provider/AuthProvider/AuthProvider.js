import { useNavigate } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import { itemExists, saveItem, removeItem } from '../../helper/LocalStorage';
import { DOCUMENTATION_PATH } from '../../contacts/routs';
import { AUTH_TOKEN } from '../../contacts/Contacts';

export const AuthContext = React.createContext(null);

AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(() => itemExists(AUTH_TOKEN));
  const navigate = useNavigate();

  const logOut = () => {
    removeItem(AUTH_TOKEN);
    setLoggedIn(false);
  };

  const logIn = (token) => {
    saveItem(AUTH_TOKEN, token);
    setLoggedIn(true);
    navigate(DOCUMENTATION_PATH);
  };

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        logOut,
        logIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const value = useContext(AuthContext);

  if (!value) {
    throw new Error('Auth Context Provider is not defined');
  }
  return value;
};

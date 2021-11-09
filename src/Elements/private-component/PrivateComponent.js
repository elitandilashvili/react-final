import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { HOME_PATH } from '../../contacts/routs';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';

export const PrivateComponent = ({ Component, ...props }) => {
  const { loggedIn } = useContext(AuthContext);

  return loggedIn ? (
    <Component {...props} />
  ) : (
    <Navigate replace to={HOME_PATH} />
  );
};

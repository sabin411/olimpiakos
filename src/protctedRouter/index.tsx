import React from 'react';

// packages
import { Navigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const ProtectMe = ({ children }: { children: JSX.Element }) => {
  const cookies = new Cookies();
  const isAuth = cookies.get('token') || undefined;
  return isAuth ? children : <Navigate to='/login' />;
};
export default ProtectMe;

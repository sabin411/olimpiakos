import React, { useEffect } from 'react';

// utils
import { showToast } from '@/utils/Toast/toast';

// packages
import { Navigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const ProtectMe = ({ children }: { children: JSX.Element }) => {
  const cookies = new Cookies();
  const isAuth = cookies.get('token') || undefined;
  useEffect(() => {
    if (!isAuth)
      showToast({
        title: 'Cannot watch video.',
        subTitle: 'You must be logged in to watch video.',
        position: 'top-right',
        type: 'warning',
      });
  }, []);
  return isAuth ? children : <Navigate to='/login' />;
};
export default ProtectMe;

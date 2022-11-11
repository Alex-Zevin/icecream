import React, { useContext } from 'react';

import { Navigate } from 'react-router-dom';

import { MyContext } from '../../App';

export const AuthWrapper = ({ children }) => {
  const { isAuth } = useContext(MyContext)
  return isAuth ? children : <Navigate to='/' />
};
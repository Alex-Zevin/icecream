import React from 'react';

import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const AuthWrapper = ({children}) => {
  const isAuth = useSelector(state => state.isAuth)
  return isAuth ? children : <Navigate to="/"/>
};
import React from 'react';
import {Navigate} from 'react-router-dom';

const RequireAuth = ({children}) => {
  const isAuth = localStorage.getItem('token');
  if (!isAuth) {
    return <Navigate to="/Login" replace="true" />;
  }
  return children;
};

export default RequireAuth;
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
const ProtetedRoute = () => {
  const user = localStorage.getItem('user');
  // return user ? <Outlet /> : <Navigate to='/login' />;
  return <Outlet />;
};

export default ProtetedRoute;

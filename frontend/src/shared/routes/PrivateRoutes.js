import { Outlet, Navigate } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

export const PrivateRoutes = () => {
  const { user } = useAuth();

  console.log(user);

  return user ? <Outlet /> : <Navigate to="/login" />;
};

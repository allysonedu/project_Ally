import { Routes, Route, Navigate } from 'react-router-dom';

import {
  SignIn,
  SignUp,
  Login,
  Home,
  Assistido,
  FindAssistido,
} from '../../pages';

import { PrivateRoutes } from './PrivateRoutes';

import { Layout } from '../components';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />

      <Route path="/sign-up" element={<SignUp />} />

      <Route path="/login" element={<Login />} />

      <Route element={<PrivateRoutes />}>
        <Route
          path="/home"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/assistido"
          element={
            <Layout>
              <Assistido />
            </Layout>
          }
        />
        <Route
          path="/find-assistido"
          element={
            <Layout>
              <FindAssistido />
            </Layout>
          }
        />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

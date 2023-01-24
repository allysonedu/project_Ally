import { Routes, Route, Navigate } from 'react-router-dom';

import {
  TypeUser,
  SignUp,
  Login,
  Home,
  Assisteds,
  FormAssisteds,
  AssistedsDetails,
} from '../../pages';

import { PrivateRoutes } from './PrivateRoutes';

import { Layout } from '../components';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TypeUser />} />

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
          path="/assistidos"
          element={
            <Layout>
              <Assisteds />
            </Layout>
          }
        />

        <Route
          path="/assisteds/:id"
          element={
            <Layout>
              <AssistedsDetails />
            </Layout>
          }
        />
        <Route
          path="/find-assistido"
          element={
            <Layout>
              <FormAssisteds />
            </Layout>
          }
        />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

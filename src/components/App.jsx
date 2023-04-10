import { useDispatch } from "react-redux";
import { lazy, useEffect } from "react";
import { refreshUser } from "redux/auth/operations";
import { Layout } from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "routes/PrivateRoute";
import { RestrictedRoute } from "routes/RestrictedRoute";
import { useAuth } from "hooks";

const HomePage = lazy(() => import('../pages/HomePage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(()=> import('../pages/LoginPage'))

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  
  return (
    isRefreshing ?
      (<b>...</b>) :
      (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />} />
            <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />} />
            <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />} />
          </Route>
        </Routes>
      )
  )
};

// import { useDispatch } from "react-redux";
// import { lazy, Suspense, useEffect } from "react";
// import { fetchContacts } from "redux/contacts/operations";
import { Layout } from "./Layout/Layout";
import RegisterPage from '../pages/RegisterPage';
import HomePage from "../pages/HomePage";
import ContactsPage from "../pages/ContactsPage";
// import { Route, Routes} from "react-router-dom";

// const HomePage = lazy(() => import('../pages/HomePage'));
// const ContactsPage = lazy(() => import('../pages/ContactsPage'));
// const RegisterPage = lazy(()=> import('../pages/RegisterPage'))

export const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <div>
      {/* <Suspense fallback={null}> */}
        <Layout />
        <RegisterPage/>
        <HomePage />
        <ContactsPage/>
      {/* </Suspense> */}
    </div>
  )
};

// eslint-disable-next-line no-lone-blocks
{/* <Routes>
  <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/tasks"
          element={
            <PrivateRoute redirectTo="/login" component={<TasksPage />} />
          }
        />
      </Route>
</Routes> */}
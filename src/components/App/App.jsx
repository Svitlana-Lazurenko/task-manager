import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { useAuth } from 'hooks';
import { refreshUser } from 'redux/auth/operations';
import Layout from './Layout';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';

const RegisterPage = lazy(() => import('../../pages/Register'));
const LoginPage = lazy(() => import('../../pages/Login'));
const HomePage = lazy(() => import('../../pages/Home'));
const CategoriesPage = lazy(() => import('../../pages/Categories'));
const TasksPage = lazy(() => import('../../pages/Tasks'));
const CreateTaskPage = lazy(() => import('../../pages/CreateTask'));
const EditTaskPage = lazy(() => import('../../pages/EditTask'));
const NotFound = lazy(() => import('../../pages/NotFound'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/categories"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo="/categories"
              component={<LoginPage />}
            />
          }
        />
        <Route
          path="/categories"
          element={
            <PrivateRoute redirectTo="/login" component={<CategoriesPage />} />
          }
        />
        <Route
          path="/tasks/:id"
          element={
            <PrivateRoute redirectTo="/login" component={<TasksPage />} />
          }
        />
        <Route
          path="/edit-task/:id"
          element={
            <PrivateRoute redirectTo="/login" component={<EditTaskPage />} />
          }
        />
        <Route
          path="/create-task/:id"
          element={
            <PrivateRoute redirectTo="/login" component={<CreateTaskPage />} />
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;

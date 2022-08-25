import { PrivateRoute } from '@HOC/PrivateRoute';
import { useToggle } from '@Hooks/useToggle';
import {
  CategoryPage,
  DetailPage,
  MainPage,
  MyPage,
  OnBoardingPage,
  UpdatePage,
  WritePage,
} from '@Page/.';
import { StartPage } from '@Page/StartPage';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  const { state: loading, toggle: toggleLoading } = useToggle();
  useEffect(() => {
    setTimeout(() => {
      toggleLoading();
    }, 2000);
  }, []);
  if (!loading) return <StartPage />;
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <MainPage />
          </PrivateRoute>
        }
      />
      <Route path="/onBoard" element={<OnBoardingPage />} />
      <Route
        path="/write"
        element={
          <PrivateRoute>
            <WritePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/my"
        element={
          <PrivateRoute>
            <MyPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/detail/:id"
        element={
          <PrivateRoute>
            <DetailPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/category"
        element={
          <PrivateRoute>
            <CategoryPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/update/:id"
        element={
          <PrivateRoute>
            <UpdatePage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

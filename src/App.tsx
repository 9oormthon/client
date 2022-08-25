import { PrivateRoute } from '@HOC/PrivateRoute';
import {
  CategoryPage,
  DetailPage,
  MainPage,
  MyPage,
  OnBoardingPage,
  UpdatePage,
  WritePage,
} from '@Page/.';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
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
        path="/update"
        element={
          <PrivateRoute>
            <UpdatePage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

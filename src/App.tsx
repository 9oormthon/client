import { CategoryPage, DetailPage, MainPage, MyPage, OnBoardingPage, WritePage } from '@Page/.';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/onBoard" element={<OnBoardingPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/my" element={<MyPage />} />
      <Route path="/detail" element={<DetailPage />} />
      <Route path="/category" element={<CategoryPage />} />
    </Routes>
  );
};

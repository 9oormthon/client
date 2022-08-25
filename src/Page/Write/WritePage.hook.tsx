/* eslint-disable import/extensions */
import { LocationType } from '@Page/Main/MainPage.hook';
import { useCallback, useState } from 'react';

export const useGetLocation = (loc?: LocationType | undefined) => {
  const [location, setLocation] = useState(loc ?? '제주시');
  const handleLocation = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocation(e.target.value as LocationType);
  }, []);

  return { location, handleLocation };
};

export const useGetCategory = (cate?: string | undefined) => {
  const [category, setCategory] = useState(cate ?? '전체');
  const handleCategory = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  }, []);

  return { category, handleCategory };
};

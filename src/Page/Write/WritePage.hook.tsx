import { useCallback, useState } from 'react';

export const useGetLocation = () => {
  const [location, setLocation] = useState('제주시');
  const handleLocation = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocation(e.target.value);
  }, []);

  return { location, handleLocation };
};

export const useGetCategory = () => {
  const [category, setCategory] = useState('전체');
  const handleCategory = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  }, []);

  return { category, handleCategory };
};

import { useCallback, useState } from 'react';

export const useGetLocation = () => {
  const [location, setLocation] = useState('제주시');
  const handleLocation = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocation(e.target.value);
  }, []);

  return { location, handleLocation };
};

export const useGetTraffic = () => {
  const [traffic, setTraffic] = useState('전체');
  const handleTraffic = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setTraffic(e.target.value);
  }, []);

  return { traffic, handleTraffic };
};

import { useState, useLayoutEffect, useCallback } from 'react';

type LocationType = '전체' | '제주시' | '서귀포시';
export const useGetData = (location: LocationType) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useLayoutEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/posts?location=${location}`);
      const json = await response.json();
      setData(json);
      setIsLoading(false);
    };
    fetchData();
  }, [location]);

  return { data, isLoading };
};

export const useGetLocation = () => {
  const [location, setLocation] = useState<LocationType>('전체');
  const handleLocation = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocation(e.target.value as LocationType);
  }, []);

  return { location, handleLocation };
};

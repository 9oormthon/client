import { filter } from '@Common/Util/api';
import { useState, useLayoutEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export type DataType = {
  title: string;
  userName: string;
  contents: string;
  createdAt: string;
  years: number;
  id: number;
  commentsCount: number;
};
export type LocationType = '전체' | '제주시' | '서귀포시';
export const useGetData = (location: LocationType, category: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<DataType[]>([]);

  useLayoutEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://3.39.231.16:8080/api/posts?location=${location}?category=${category}`,
      );
      const json = await response.json();

      const filterLocation = location === '전체' ? json : filter(json, 'location', location);
      const arr =
        category === '전체' ? filterLocation : filter(filterLocation, 'category', category);
      setData(arr);
      setIsLoading(false);
    };
    fetchData();
  }, [location, category]);

  return { data, isLoading };
};

export const useGetLocation = () => {
  const [location, setLocation] = useState<LocationType>('전체');
  const handleLocation = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocation(e.target.value as LocationType);
  }, []);

  return { location, handleLocation };
};

export const useHandleCardClick = () => {
  const navigate = useNavigate();
  const goDetail = (id: string) => navigate(`/detail/${id}`);

  const func = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = (e.target as Element).closest('#Card');
    if (!(target instanceof HTMLDivElement)) return;
    if (!target.dataset.id) return;
    goDetail(target.dataset.id);
  };

  return func;
};

export const useHandleMoveCard = () => {
  const navigate = useNavigate();
  const goDetail = (id: string) => navigate(`/detail/${id}`);

  const func = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = (e.target as Element).closest('#Comment');
    if (!(target instanceof HTMLDivElement)) return;
    if (!target.dataset.id) return;
    goDetail(target.dataset.id);
  };

  return func;
};

import { fetchAPI } from '@Common/Util/api';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useQueryStr = () => {
  const { search } = useLocation();
  return search.split('?')[1];
};

type commentType = {
  id: number;
  userId: string;
  contents: string;
  createdAt: string;
};
type dataType = {
  id: number;
  userName: string;
  title: string;
  contents: string;
  createdAt: string;
  comments: commentType[];
  commentsCount: number;
  years: number;
};
export const useDetailData = (id: string) => {
  const [data, setData] = useState<dataType | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const temp: dataType | undefined = await fetchAPI('list', { id });
    if (!temp) return;
    setData(temp);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [id]);

  return { data, loading };
};

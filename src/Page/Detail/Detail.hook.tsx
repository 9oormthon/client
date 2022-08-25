/* eslint-disable import/extensions */
import { fetchAPI } from '@Common/Util/api';
import { getStorage } from '@Common/Util/localStorage';
import { LocationType } from '@Page/Main/MainPage.hook';
import { useState, useEffect, useRef } from 'react';
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
export type dataType = {
  id: number;
  userName: string;
  title: string;
  contents: string;
  createdAt: string;
  comments: commentType[];
  commentsCount: number;
  years: number;
  category: string;
  location: LocationType;
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

export const useInputHandler = () => {
  const ref = useRef<HTMLInputElement>(null);
  const handleSendComment = () => {
    if (!ref?.current) return;
    const { value } = ref.current;
    // postComment
    console.log(value);
    ref.current.value = '';
  };
  return { ref, handleSendComment };
};

export const useCheckMyPost = (writer: string) => {
  const { id } = getStorage();
  return true;
  return id === writer;
};

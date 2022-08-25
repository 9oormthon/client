/* eslint-disable import/extensions */
import { fetchAPI, postAPI } from '@Common/Util/api';
import { getStorage } from '@Common/Util/localStorage';
import { LocationType } from '@Page/Main/MainPage.hook';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

export const useQueryStr = () => {
  const params = useParams();
  return params?.id;
};

type commentType = {
  id: number;
  userId: string;
  contents: string;
  createdAt: string;
  postId: number;
};
export type dataType = {
  id: number;
  userName: string;
  title: string;
  contents: string;
  createdAt: string;
  comment: commentType[];
  commentsCount: number;
  years: number;
  category: string;
  location: LocationType;
};
export const useDetailData = (id: string | undefined) => {
  const [data, setData] = useState<dataType | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const temp: dataType | undefined = await fetchAPI(`list/${id}`);
    if (!temp) return;
    setData(temp);
    setLoading(false);
  };

  useEffect(() => {
    console.log(id);
    if (!id) return;
    getData();
  }, [id]);

  return { data, loading };
};

export const useInputHandler = (id: string | undefined) => {
  const ref = useRef<HTMLInputElement>(null);
  const { id: userId } = getStorage();
  const handleSendComment = () => {
    if (!id) return;
    if (!ref?.current) return;
    const { value } = ref.current;
    ref.current.value = '';
    postAPI('comment', { contents: value, postId: id, userName: userId });
  };
  return { ref, handleSendComment };
};

export const useCheckMyPost = (writer: string) => {
  const { id } = getStorage();
  return id === writer;
};

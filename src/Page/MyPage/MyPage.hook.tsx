/* eslint-disable import/extensions */
import { fetchAPI } from '@Common/Util/api';
import { CommentCardType } from '@Component/CommentCard';
import { DataType } from '@Page/Main/MainPage.hook';
import { useEffect, useState } from 'react';

export const useCurrentTab = () => {
  const [currentTab, setCurrentTab] = useState('post');
  const handleTabClick = (tabName: string) => setCurrentTab(tabName);
  return { currentTab, handleTabClick };
};

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const handleFalseLoading = () => setIsLoading(false);

  return { isLoading, handleFalseLoading };
};

export const useGetMyData = (id: string | null, cb: () => void) => {
  const [postData, setPostData] = useState<DataType[]>([]);
  const [commentData, setCommentData] = useState<CommentCardType[]>([]);

  useEffect(() => {
    if (!id) return;
    const fetchMyData = async () => {
      const myPosts = (await fetchAPI('myPosts', { id })) as DataType[];
      const myComments = (await fetchAPI('myComments', { id })) as CommentCardType[];
      setPostData(myPosts);
      setCommentData(myComments);
      cb();
    };

    fetchMyData();
  }, [id]);

  return { postData, commentData };
};

import { postAPI } from './api';

/* eslint-disable no-restricted-globals */
export const getStorage = () => {
  const years = localStorage.getItem('years');
  const id = localStorage.getItem('id');
  return { years, id };
};

type SwitchKey = (key: 'years' | 'id', value: number | string) => boolean;
export const switchKey: SwitchKey = (key, value) =>
  key === 'years' ? validationYear(value) : !validationId(`${value}`);
const validationYear = (value: string | number) => isNaN(Number(value));
const validationId = async (userName: string) => {
  const { years } = getStorage();
  const res = await postAPI('signup', { userName, years });
  return res;
};

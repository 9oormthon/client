/* eslint-disable no-param-reassign */
import { useNavigate } from 'react-router-dom';

type Props = (str: string | string[]) => (() => void)[];
export const useMovePage: Props = str => {
  const navigate = useNavigate();

  if (typeof str === 'string') {
    str = [str];
  }
  const func = str.map(string => () => navigate(string));
  return func;
};

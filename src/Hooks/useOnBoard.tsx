import { getStorage } from '@Common/Util/localStorage';
import { useEffect, useRef } from 'react';
import '@Common/Style/Slide.css';

import { useMovePage } from './useMovePage';

const checkStorage = () => {
  const { years, id } = getStorage();
  if (!years) return 0;
  if (!id) return 1;
  return 2;
};

export const useOnBoard = () => {
  const idx = checkStorage();
  return idx;
};

type refType = React.RefObject<HTMLInputElement>;
type keyType = 'years' | 'id' | 'pw';
export const useHandleInput = (inputRef: refType, key: keyType) => {
  const [goBoard] = useMovePage('/onBoard');
  const handleChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!inputRef.current) return;
    if (e.keyCode !== 13) return;
    const { value } = inputRef.current;
    localStorage.setItem(key, value);
    goBoard();
  };
  return handleChange;
};

export const useOnBoardSlider = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  setTimeout(() => {
    if (!ref.current) return;
    ref.current.classList.remove('slideDown');
    ref.current.classList.add('slidUp');
  }, 100);

  useEffect(() => {
    inputRef.current!.focus();
  }, []);
  return { ref, inputRef };
};

/* eslint-disable no-param-reassign */
import { getStorage, switchKey } from '@Common/Util/localStorage';
import { useEffect, useRef } from 'react';

import { useMovePage } from './useMovePage';
import { useToggle } from './useToggle';

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
type keyType = 'years' | 'id';
export const useHandleInput = (inputRef: refType, key: keyType, handleModal: () => void) => {
  const [goBoard] = useMovePage('/onBoard');

  const registerData = () => {
    if (!inputRef.current) return;
    const { value } = inputRef.current;
    if (switchKey(key, value)) {
      handleModal();
      inputRef.current.value = '';
      return;
    }
    localStorage.setItem(key, value);
    goBoard();
  };
  const handleBoardData = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!inputRef.current) return;
    if (e.keyCode !== 13) return;
    registerData();
  };

  return { handleBoardData, registerData };
};

export const useToggleSlide = () => {
  const { state, setTrue } = useToggle();
  setTimeout(() => {
    setTrue();
  }, 0);
  return state;
};

export const useHandleInputRef = (storageKey: 'years' | 'id', handleModal: () => void) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { handleBoardData, registerData } = useHandleInput(inputRef, storageKey, handleModal);
  useEffect(() => {
    inputRef.current!.focus();
  }, []);
  return { inputRef, handleBoardData, registerData };
};

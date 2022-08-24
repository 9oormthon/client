import { useCallback, useState } from 'react';

export const useToggle = () => {
  const [state, setState] = useState(false);
  const toggle = useCallback(() => setState(prev => !prev), []);
  const setTrue = useCallback(() => setState(true), []);
  return { state, toggle, setTrue };
};

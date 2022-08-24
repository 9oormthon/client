import { useCallback, useState } from 'react';

type Props = () => [boolean, () => void];
export const useToggle: Props = () => {
  const [state, setState] = useState(false);
  const toggle = useCallback(() => setState(prev => !prev), []);
  return [state, toggle];
};

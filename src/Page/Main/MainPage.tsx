import { getStorage } from '@Common/Util/localStorage';
import { useMovePage } from '@Hooks/useMovePage';
import { useOnBoard } from '@Hooks/useOnBoard';
import { useEffect } from 'react';

export const MainPage = () => {
  const idx = useOnBoard();
  const [onBoard] = useMovePage('/onBoard');
  useEffect(() => {
    if (idx === 2) return;
    onBoard();
  }, [idx]);
  const { years, id } = getStorage();
  return <div>MainPage</div>;
};

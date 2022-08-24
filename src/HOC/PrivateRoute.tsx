import { useMovePage } from '@Hooks/useMovePage';
import { useOnBoard } from '@Hooks/useOnBoard';
import React, { useEffect } from 'react';

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const idx = useOnBoard();
  const [onBoard] = useMovePage('/onBoard');

  useEffect(() => {
    if (idx === 2) return;
    onBoard();
  }, [idx]);

  return children;
};

import { CategoryAtom } from '@Recoil/Category';
import { useRecoilState } from 'recoil';

export const useHandleCategory = () => {
  const [state, setState] = useRecoilState(CategoryAtom);
  const handleClickMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const parent = (e.target as Element).closest('#container');
    if (!(parent instanceof HTMLDivElement)) return;
    setState(Number(parent.dataset.id));
  };
  return { state, handleClickMenu };
};

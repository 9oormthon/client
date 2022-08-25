import { OnBoardingId, OnBoardingYear } from '@Component/OnBoarding';
import { useMovePage } from '@Hooks/useMovePage';
import { useOnBoard } from '@Hooks/useOnBoard';

export const OnBoardingPage = () => {
  const idx = useOnBoard();
  const [goWelcome] = useMovePage('/welcome');
  if (idx === 2) {
    goWelcome();
    return null;
  }
  return selectComponent[idx];
};

type SelectComponent = {
  [key: number]: JSX.Element;
};
const selectComponent: SelectComponent = {
  0: <OnBoardingYear />,
  1: <OnBoardingId />,
};

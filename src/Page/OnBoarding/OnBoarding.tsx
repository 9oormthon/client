import { OnBoardingId, OnBoardingPw, OnBoardingYear } from '@Component/.';
import { useMovePage } from '@Hooks/useMovePage';

import { useCheckOnBoarding } from './OnBoarding.hook';

export const OnBoardingPage = () => {
  const idx = useCheckOnBoarding();
  const [goMain] = useMovePage('/main');
  if (idx === 3) {
    goMain();
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
  2: <OnBoardingPw />,
};

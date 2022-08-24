import { OnBoardingId } from 'Component/OnBoardingId/OnBoardingId';
import { OnBoardingPw } from 'Component/OnBoardingPw/OnBoardingPw';
import { OnBoardingYear } from 'Component/OnBoardingYear/OnBoardingYear';

export const useCheckOnBoarding = () => {
  const idx = checkStorage();
  return selectComponent[idx];
};

const checkStorage = () => {
  const years = localStorage.getItem('years');
  const id = localStorage.getItem('id');
  const pw = localStorage.getItem('pw');
  if (!years) return 0;
  if (!id) return 1;
  if (!pw) return 2;
  return 3;
};

type SelectComponent = {
  [key: number]: React.ReactNode;
};
const selectComponent: SelectComponent = {
  0: <OnBoardingYear />,
  1: <OnBoardingId />,
  2: <OnBoardingPw />,
  3: null,
};

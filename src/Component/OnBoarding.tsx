import { OnBoardingHOC } from '../HOC/OnBoardingHOC';

export const OnBoardingId = () => (
  <OnBoardingHOC storageKey="id" text="어떤 닉네임을 사용하시겠어요?" />
);
export const OnBoardingYear = () => (
  <OnBoardingHOC storageKey="years" text="제주 몇 년 차이신가요?" />
);

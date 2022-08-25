import { Egg, Chick, Chick2, Chicken } from '@Assets/level';

export const getLevelIcon = (years: number) => {
  if (years === 0) {
    return <Egg />;
  }
  if (years >= 1 && years <= 3) {
    return <Chick />;
  }
  if (years >= 4 && years <= 6) {
    return <Chick2 />;
  }
  return <Chicken />;
};

export const getLevel = (years: number) => {
  if (years === 0) {
    return 1;
  }
  if (years >= 1 && years <= 3) {
    return 2;
  }
  if (years >= 4 && years <= 6) {
    return 3;
  }
  return 4;
};

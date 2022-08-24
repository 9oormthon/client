import { atom, selector } from 'recoil';

export const CategoryAtom = atom<number>({
  key: 'CategoryAtom',
  default: 0,
});

export const CategorySelector = selector({
  key: 'CategorySelector',
  get: ({ get }) => {
    const idx = get(CategoryAtom);
    switch (idx) {
      case 0:
        return '전체';
      case 1:
        return '교통';
      case 2:
        return '분위기';
      case 3:
        return '렌트카';
      case 4:
        return '맛집';
      case 5:
        return '부동산';
      case 6:
        return '주차장';
      case 7:
        return '인구';
      case 8:
        return '카페';
      case 9:
        return '여가활동';
      default:
        return '전체';
    }
  },
});

export const useCheckOnBoarding = () => {
  const idx = checkStorage();
  return idx;
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

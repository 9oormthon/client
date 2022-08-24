export const getStorage = () => {
  const years = localStorage.getItem('years');
  const id = localStorage.getItem('id');

  return { years, id };
};

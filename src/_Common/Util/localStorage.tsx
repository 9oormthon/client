/* eslint-disable no-restricted-globals */
export const getStorage = () => {
  const years = localStorage.getItem('years');
  const id = localStorage.getItem('id');
  return { years, id };
};

type SwitchKey = (key: 'years' | 'id', value: number | string) => boolean;
export const switchKey: SwitchKey = (key, value) => {
  if (key === 'years') {
    return validationYear(value);
  }
  return !validationId(`${value}`);
};
const validationYear = (value: string | number) => isNaN(Number(value));
const validationId = (value: string) => {
  // call API
  return true;
};

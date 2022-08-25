import axios from 'axios';

export const fetchAPI = async <T,>(apiName: string, params?: object): Promise<T | undefined> => {
  try {
    const response = await axios.get(`/api/${apiName}`, { params });
    return response.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const postAPI = async <T,>(apiName: string, data?: object): Promise<T | undefined> => {
  try {
    const response = await axios.post(`/api/${apiName}`, data);
    return response.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

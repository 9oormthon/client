import axios from 'axios';

export const fetchAPI = async <T,>(apiName: string, params?: object): Promise<T | undefined> => {
  try {
    const response = await axios.get(`http://3.39.231.16:8080/api/${apiName}`, { params });
    return response.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const postAPI = async <T,>(apiName: string, data?: object): Promise<T | undefined> => {
  try {
    const response = await axios.post(`http://3.39.231.16:8080/api/${apiName}`, data);
    return response.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const putAPI = async (apiName: string, data?: object) => {
  try {
    await axios.put(`http://3.39.231.16:8080/api/${apiName}`, data);
  } catch (error) {
    console.log(error);
  }
};

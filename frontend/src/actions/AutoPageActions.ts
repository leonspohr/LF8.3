import fetchBackend from '../util/fetchBackend'
import Auto from "../types/Auto";

export const getAutoById = async (id: any, setAuto: any) => {
  try {
    const response = await fetchBackend('/getAutoById?id=' + id, 'GET');
    setAuto(await response.json());
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const setVerliehen = async (id: any, setAuto: any) => {
  try {
    const response = await fetchBackend('/setVerliehen?id=' + id, 'PUT');
    setAuto(await response.json());
  } catch (error) {
    console.log(error);
    throw error;
  }
};

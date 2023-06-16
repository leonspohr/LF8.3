import fetchBackend from '../util/fetchBackend'
import Auto from '../types/Auto';

export const getAllAutos = async (setAllAutos: any) => {
  try {
    const response = await fetchBackend('/getAllAutos', 'GET');
    setAllAutos(await response.json());
  } catch (error) {
    console.log(error);
    throw error;
  }
};
import fetchBackend from '../util/fetchBackend'

export const getAllCars = async (setAllAutos: any) => {
  try {
    const response = await fetchBackend('/getAllAutos', 'GET');
    setAllAutos(await response.json());
  } catch (error) {
    console.log(error);
    throw error;
  }
};
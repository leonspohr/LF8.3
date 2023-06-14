import fetchBackend from '../util/fetchBackend'

export const getAutoById = async (id: any, setAuto: any) => {
  try {
    const response = await fetchBackend('/getAutoById?id=' + id, 'GET');
    setAuto(await response.json());
  } catch (error) {
    console.log(error);
    throw error;
  }
};
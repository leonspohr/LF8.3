import fetchBackend from '../util/fetchBackend'
import Auto from "../types/Auto";


export const saveAuto = async (auto: Auto) => {
  try {
    await fetchBackend('/saveAuto', 'POST', auto);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

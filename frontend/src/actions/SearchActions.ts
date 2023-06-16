import fetchBackend from '../util/fetchBackend'

export const searchAction = async (searchValue: any, selectedParameter: any, setAllAutos: any) => {
  try {
    const response = await fetchBackend(
        '/getAutosBySearch',
        'PUT',
        {selectedParameter:selectedParameter, searchValue:searchValue}
    );
    setAllAutos(await response.json());
  } catch (error) {
    console.log(error);
    throw error;
  }
};
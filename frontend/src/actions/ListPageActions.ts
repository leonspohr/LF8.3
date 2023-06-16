import fetchBackend from '../util/fetchBackend';
import Kunde from '../types/Kunde';

export const getAllAutos = async (setAllAutos: any) => {
	try {
		const response = await fetchBackend('/getAllAutos', 'GET');
		setAllAutos(await response.json());
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const addKunde = async (kunde: Kunde) => {
	try {
		const report = await fetchBackend('/addKunde', 'GET');
	} catch (error) {
		console.log(error);
		throw error;
	}
};
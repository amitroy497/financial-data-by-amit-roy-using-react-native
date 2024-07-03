import axios from 'axios';
import { BACKEND_URL } from './backendUrl';

export const storeSavingsDetails = async (savingsData: any) => {
	const response = await axios.post(`${BACKEND_URL}/savings.json`, savingsData);
	const id = response?.data?.name;
	return id;
};

export const fetchSavingsDetails = async () => {
	const response = await axios.get(`${BACKEND_URL}/savings.json`);
	let savingsData = {};

	for (const key in response?.data) {
		const savingsDataObj = {
			id: key,
			data: response?.data[key],
		};
		savingsData = savingsDataObj;
	}
	return savingsData;
};

export const updateSavingsDetails = (id: string, savingsData: any) => {
	return axios.put(`${BACKEND_URL}/savings/${id}.json`, savingsData);
};

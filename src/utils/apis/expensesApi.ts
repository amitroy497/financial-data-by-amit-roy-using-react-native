import axios from 'axios';
import { BACKEND_URL } from './backendUrl';

export const storeExpensesDetails = async (expensesData: any) => {
	const response = await axios.post(
		`${BACKEND_URL}/expenses.json`,
		expensesData
	);
	const id = response?.data?.name;
	return id;
};

export const fetchExpensesDetails = async () => {
	const response = await axios.get(`${BACKEND_URL}/expenses.json`);
	let expensesData = {};

	for (const key in response?.data) {
		const expensesDataObj = {
			id: key,
			data: response?.data[key],
		};
		expensesData = expensesDataObj;
	}
	return expensesData;
};

export const updateExpensesDetails = (id: string, expensesData: any) => {
	return axios.put(`${BACKEND_URL}/expenses/${id}.json`, expensesData);
};

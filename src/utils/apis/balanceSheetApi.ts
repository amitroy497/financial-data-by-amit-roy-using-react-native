import axios from 'axios';
import { BACKEND_URL } from './backendUrl';

export const storeBalanceSheetDetails = async (balanceSheetData: any) => {
	const response = await axios.post(
		`${BACKEND_URL}/balancesheet.json`,
		balanceSheetData
	);
	const id = response?.data?.name;
	return id;
};

export const fetchBalanceSheetDetails = async () => {
	const response = await axios.get(`${BACKEND_URL}/balancesheet.json`);
	let sheetData = {};

	for (const key in response?.data) {
		const sheetDataObj = {
			id: key,
			data: response?.data[key],
		};
		sheetData = sheetDataObj;
	}
	return sheetData;
};

export const updateBalanceSheetDetails = (
	id: string,
	balanceSheetData: any
) => {
	return axios.put(`${BACKEND_URL}/balancesheet/${id}.json`, balanceSheetData);
};

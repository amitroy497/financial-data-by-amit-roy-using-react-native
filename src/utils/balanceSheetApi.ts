import axios from 'axios';

const BACKEND_URL =
	'https://financial-data-by-amit-r-5d93f-default-rtdb.firebaseio.com';

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
	return response?.data;
};

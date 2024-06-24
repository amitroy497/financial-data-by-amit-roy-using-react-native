import axios from 'axios';

const BACKEND_URL =
	'https://financial-data-by-amit-r-5d93f-default-rtdb.firebaseio.com';

export const storeInvestmentDetails = async (investmentData: any) => {
	const response = await axios.post(
		`${BACKEND_URL}/investments.json`,
		investmentData
	);
	const id = response?.data?.name;
	return id;
};

export const fetchInvestmentDetails = async () => {
	const response = await axios.get(`${BACKEND_URL}/investments.json`);
	let investmentData = {};

	for (const key in response?.data) {
		const investmentDataObj = {
			id: key,
			data: response?.data[key],
		};
		investmentData = investmentDataObj;
	}
	return investmentData;
};

export const updateInvestmentDetails = (id: string, investmentData: any) => {
	return axios.put(`${BACKEND_URL}/investments/${id}.json`, investmentData);
};

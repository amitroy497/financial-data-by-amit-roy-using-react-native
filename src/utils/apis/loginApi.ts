import axios from 'axios';
import { BACKEND_URL } from './backendUrl';

export const storeLoginDetails = async (loginData: any) => {
	const response = await axios.post(`${BACKEND_URL}/login.json`, loginData);
	const id = response?.data?.name;
	return id;
};

export const fetchLoginDetails = async () => {
	const response = await axios.get(`${BACKEND_URL}/login.json`);
	const loginDetails = [];

	for (const key in response?.data) {
		const loginObj = {
			id: key,
			mpin: response.data[key].mpin,
			loginid: response.data[key].loginid,
		};
		loginDetails.push(loginObj);
	}
	return loginDetails;
};

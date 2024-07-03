import axios from 'axios';
import { AuthenticateTypes, CreateloginTypes } from '../../constants/types';

const API_KEY = 'AIzaSyDtRPbZ98UH16FAfRLiVoI3zSetQd-xHns';

export const authenticate = async ({
	mode,
	email,
	password,
}: AuthenticateTypes) => {
	const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
	const response = await axios.post(url, {
		email: email,
		password: password,
		returnSecureToken: true,
	});

	const token = response?.data?.idToken;
	const id = response?.data?.localId;
	return { id, token };
};

export const createUser = ({ email, password }: CreateloginTypes) => {
	const mode = 'signUp';
	return authenticate({ mode, email, password });
};

export const login = ({ email, password }: CreateloginTypes) => {
	const mode = 'signInWithPassword';
	return authenticate({ mode, email, password });
};

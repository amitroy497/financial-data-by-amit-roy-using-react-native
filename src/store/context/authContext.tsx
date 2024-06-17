import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, ReactNode, useEffect, useState } from 'react';

export const AuthContext = createContext({
	token: '',
	isAuthenticated: false,
	authenticate: (token: string) => {},
	logout: () => {},
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
	const [authToken, setAuthToken] = useState('');

	useEffect(() => {
		const fetchToken = async () => {
			const storageToken: string = (await AsyncStorage.getItem('token')) || '';

			if (storageToken && storageToken?.length > 0) {
				setAuthToken(storageToken);
			}
		};

		fetchToken();
	}, []);

	const authenticate = (token: string) => {
		setAuthToken(token);
		AsyncStorage.setItem('token', token);
	};

	const logout = () => {
		setAuthToken('');
	};

	const value = {
		token: authToken,
		isAuthenticated: !!authToken,
		authenticate: authenticate,
		logout: logout,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

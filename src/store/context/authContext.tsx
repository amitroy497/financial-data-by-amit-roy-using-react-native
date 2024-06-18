import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, ReactNode, useEffect, useState } from 'react';

export const AuthContext = createContext({
	id: '',
	token: '',
	time: '',
	isAuthenticated: false,
	authenticate: (id: string, token: string) => {},
	logout: () => {},
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
	const [authToken, setAuthToken] = useState<string>('');
	const [authId, setAuthId] = useState<string>('');
	const [authTime, setAuthTime] = useState<string>('');

	useEffect(() => {
		const fetchToken = async () => {
			const storageToken: string = (await AsyncStorage.getItem('token')) || '';
			const storageId: string = (await AsyncStorage.getItem('id')) || '';

			if (storageToken && storageToken?.length > 0) {
				setAuthToken(storageToken);
				setAuthTime('subsequent');
			}

			if (storageId && storageId?.length > 0) {
				setAuthId(storageId);
			}
		};

		fetchToken();
	}, []);

	const authenticate = (id: string, token: string) => {
		setAuthToken(token);
		AsyncStorage.setItem('token', token);
		setAuthId(id);
		AsyncStorage.setItem('id', id);
		setAuthTime('first');
	};

	const logout = () => {
		setAuthToken('');
		AsyncStorage.removeItem('token');
		setAuthId('');
		AsyncStorage.removeItem('id');
		setAuthTime('');
	};

	const value = {
		id: authId,
		token: authToken,
		time: authTime,
		isAuthenticated: !!authToken,
		authenticate: authenticate,
		logout: logout,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

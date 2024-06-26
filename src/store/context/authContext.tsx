import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { AsyncStorageName } from '../../constants';

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
			const storageToken: string =
				(await AsyncStorage.getItem(AsyncStorageName.token)) || '';
			const storageId: string =
				(await AsyncStorage.getItem(AsyncStorageName.authId)) || '';

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
		AsyncStorage.setItem(AsyncStorageName.token, token);
		setAuthId(id);
		AsyncStorage.setItem(AsyncStorageName.authId, id);
		setAuthTime('first');
	};

	const logout = () => {
		setAuthToken('');
		AsyncStorage.removeItem(AsyncStorageName.token);
		setAuthId('');
		AsyncStorage.removeItem(AsyncStorageName.authId);
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

import { useContext, useState } from 'react';
import { AuthContent, LoadingOverlay } from '../components';
import { AuthContext } from '../store';
import { Alert } from 'react-native';
import { fetchLoginDetails, login } from '../utils';
import { CreateloginTypes } from '../constants/types';
import { useNavigation } from '@react-navigation/native';

export const LoginScreen = () => {
	const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);

	const authCtx = useContext(AuthContext);

	const navigation = useNavigation();

	const loginHandler = async ({ email, password }: CreateloginTypes) => {
		setIsAuthenticating(true);
		try {
			const { id, token } = await login({ email, password });
			authCtx.authenticate(id, token);
			const loginDetails = await fetchLoginDetails();
			const isPresent = !!loginDetails?.find((log) => log?.loginid === id);

			if (isPresent) {
				navigation.navigate('Drawer' as never);
			} else {
				navigation.navigate('Mpin' as never);
			}
		} catch (error) {
			Alert.alert(
				'Authentication failed!',
				'Could not log you in. Please check your credentials or try again later!'
			);
			setIsAuthenticating(false);
		}
	};

	if (isAuthenticating) {
		return <LoadingOverlay message='Logging you in...' />;
	}

	return <AuthContent isLogin onAuthenticate={loginHandler} />;
};

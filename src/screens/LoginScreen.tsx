import { useContext, useState } from 'react';
import { AuthContent, LoadingOverlay } from '../components';
import { AuthContext } from '../store';
import { Alert } from 'react-native';
import { login } from '../utils';
import { CreateloginTypes } from '../constants/types';

export const LoginScreen = () => {
	const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);

	const authCtx = useContext(AuthContext);

	const loginHandler = async ({ email, password }: CreateloginTypes) => {
		setIsAuthenticating(true);
		try {
			const token = await login({ email, password });
			console.log(token);
			authCtx.authenticate(token);
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

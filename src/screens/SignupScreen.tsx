import { useContext, useState } from 'react';
import { AuthContent, LoadingOverlay } from '../components';
import { AuthContext } from '../store';
import { CreateloginTypes } from '../constants/types';
import { createUser } from '../utils';
import { Alert } from 'react-native';

export const SignupScreen = () => {
	const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);
	const authCtx = useContext(AuthContext);

	const signupHandler = async ({ email, password }: CreateloginTypes) => {
		setIsAuthenticating(true);
		try {
			const token = await createUser({ email, password });
			authCtx.authenticate(token);
		} catch (error) {
			Alert.alert(
				'Authentication failed!',
				'Could not create user. Please check your input or try again later!'
			);
			setIsAuthenticating(false);
		}
	};

	if (isAuthenticating) {
		return <LoadingOverlay message='Creating user...' />;
	}

	return <AuthContent onAuthenticate={signupHandler} />;
};

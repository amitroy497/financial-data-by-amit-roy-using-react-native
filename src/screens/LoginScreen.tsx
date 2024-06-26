import { useContext, useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContent, LoadingOverlay } from '../components';
import { AuthContext } from '../store';
import { fetchLoginDetails, login } from '../utils';
import { CreateloginTypes } from '../constants/types';
import { AllNavigationName } from '../constants';

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
				navigation.navigate(AllNavigationName.drawer as never);
			} else {
				navigation.navigate(AllNavigationName.mPin as never);
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

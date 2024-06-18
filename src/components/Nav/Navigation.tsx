import { NavigationContainer } from '@react-navigation/native';
import { useContext } from 'react';
import { AuthContext } from '../../store';
import { AuthStack } from './AuthStack';
import { AuthenticatedStack } from './AuthenticatedStack';

export const Navigation = () => {
	const authCtx = useContext(AuthContext);

	return (
		<NavigationContainer>
			{!authCtx.isAuthenticated ? <AuthStack /> : <AuthenticatedStack />}
		</NavigationContainer>
	);
};

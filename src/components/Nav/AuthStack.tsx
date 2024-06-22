import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, SignupScreen } from '../../screens';
import { AllNavigationName } from '../../constants';

export const AuthStack = () => {
	const Stack = createNativeStackNavigator();

	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name={AllNavigationName.login} component={LoginScreen} />
			<Stack.Screen name={AllNavigationName.signup} component={SignupScreen} />
		</Stack.Navigator>
	);
};

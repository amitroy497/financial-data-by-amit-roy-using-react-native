import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, SignupScreen } from '../../screens';

export const AuthStack = () => {
	const Stack = createNativeStackNavigator();

	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='Login' component={LoginScreen} />
			<Stack.Screen name='Signup' component={SignupScreen} />
		</Stack.Navigator>
	);
};

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MpinScreen } from '../../screens';
import { AuthenticatedDrawer } from './AuthenticatedDrawer';

export const AuthenticatedMpinStack = () => {
	const Stack = createNativeStackNavigator();

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name='Mpin' component={MpinScreen} />
			<Stack.Screen name='Drawer' component={AuthenticatedDrawer} />
		</Stack.Navigator>
	);
};

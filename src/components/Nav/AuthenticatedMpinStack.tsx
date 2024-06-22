import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MpinScreen } from '../../screens';
import { AuthenticatedDrawer } from './AuthenticatedDrawer';
import { AllNavigationName } from '../../constants';

export const AuthenticatedMpinStack = () => {
	const Stack = createNativeStackNavigator();

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name={AllNavigationName.mPin} component={MpinScreen} />
			<Stack.Screen
				name={AllNavigationName.drawer}
				component={AuthenticatedDrawer}
			/>
		</Stack.Navigator>
	);
};

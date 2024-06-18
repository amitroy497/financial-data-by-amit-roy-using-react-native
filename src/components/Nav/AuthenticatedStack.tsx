import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';
import { DashboardScreen, MpinScreen } from '../../screens';
import { AuthContext } from '../../store';
import { IconButton } from '../UI';

export const AuthenticatedStack = () => {
	const Stack = createNativeStackNavigator();

	const authCtx = useContext(AuthContext);

	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Mpin'
				component={MpinScreen}
				options={{
					headerRight: ({ tintColor }: any) => (
						<IconButton
							icon='exit'
							color={tintColor}
							size={24}
							onPress={authCtx.logout}
						/>
					),
				}}
			/>
			<Stack.Screen
				name='Dashboard'
				component={DashboardScreen}
				options={{
					headerRight: ({ tintColor }: any) => (
						<IconButton
							icon='exit'
							color={tintColor}
							size={24}
							onPress={authCtx.logout}
						/>
					),
				}}
			/>
		</Stack.Navigator>
	);
};

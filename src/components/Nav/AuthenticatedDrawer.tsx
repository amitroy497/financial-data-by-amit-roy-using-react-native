import { createDrawerNavigator } from '@react-navigation/drawer';
import { useContext } from 'react';
import {
	BalanceSheetScreen,
	DashboardScreen,
	InvestmentsScreen,
	MpinScreen,
} from '../../screens';
import { AuthContext } from '../../store';
import { IconButton } from '../UI';
import { Colors } from '../../constants';
import { Ionicons } from '@expo/vector-icons';

export const AuthenticatedDrawer = () => {
	const Drawer = createDrawerNavigator();

	const authCtx = useContext(AuthContext);

	return (
		<Drawer.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: Colors.blue700 },
				headerTintColor: Colors.white,
				headerTitleStyle: {
					fontWeight: 'bold',
				},
				headerRight: ({ tintColor }: any) => (
					<IconButton
						icon='exit'
						color={tintColor}
						size={24}
						onPress={authCtx.logout}
					/>
				),
				drawerStyle: { backgroundColor: Colors.blue700 },
				drawerActiveBackgroundColor: 'transparent',
				drawerActiveTintColor: Colors.white,
				drawerInactiveTintColor: Colors.violet600,
			}}
		>
			<Drawer.Screen
				name='Dashboard'
				component={DashboardScreen}
				options={{
					drawerLabel: 'Home',
					drawerIcon: ({ color, size }) => (
						<Ionicons name='home' color={color} size={size} />
					),
				}}
			/>
			<Drawer.Screen
				name='Balancesheet'
				component={BalanceSheetScreen}
				options={{
					drawerLabel: 'Balancesheet',
					drawerIcon: ({ color, size }) => (
						<Ionicons name='cash' color={color} size={size} />
					),
				}}
			/>
			<Drawer.Screen
				name='Investments'
				component={InvestmentsScreen}
				options={{
					drawerLabel: 'Investments',
					drawerIcon: ({ color, size }) => (
						<Ionicons name='save' color={color} size={size} />
					),
				}}
			/>
		</Drawer.Navigator>
	);
};

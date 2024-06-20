import { createDrawerNavigator } from '@react-navigation/drawer';
import { useContext } from 'react';
import {
	DashboardScreen,
	ExpensesScreen,
	InvestmentsScreen,
	SavingsScreen,
} from '../../screens';
import { AuthContext } from '../../store';
import { IconButton } from '../UI';
import { Colors } from '../../constants';
import {
	AntDesign,
	Ionicons,
	MaterialCommunityIcons,
	MaterialIcons,
} from '@expo/vector-icons';
import { BalanceSheetNavigation } from './BalanceSheetNavigation';

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
				drawerLabelStyle: { fontSize: 24, marginVertical: 10 },
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
				component={BalanceSheetNavigation}
				options={{
					title: 'Balance Sheet',
					drawerLabel: 'Balance Sheet',
					drawerIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name='scale-balance'
							color={color}
							size={size}
						/>
					),
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
			<Drawer.Screen
				name='Investments'
				component={InvestmentsScreen}
				options={{
					title: 'Investments',
					drawerLabel: 'Investments',
					drawerIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name='cash-multiple'
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name='Savings'
				component={SavingsScreen}
				options={{
					drawerLabel: 'Savings',
					drawerIcon: ({ color, size }) => (
						<MaterialIcons name='savings' color={color} size={size} />
					),
				}}
			/>
			<Drawer.Screen
				name='Expenses'
				component={ExpensesScreen}
				options={{
					drawerLabel: 'Expenses',
					drawerIcon: ({ color, size }) => (
						<AntDesign name='rocket1' color={color} size={size} />
					),
				}}
			/>
		</Drawer.Navigator>
	);
};

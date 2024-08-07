import {
	AntDesign,
	Ionicons,
	MaterialCommunityIcons,
	MaterialIcons,
} from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { AllNavigationName, Colors } from '../../constants';
import { DashboardScreen, ExpensesScreen } from '../../screens';
import { AuthContext } from '../../store';
import { IconButton } from '../UI';
import { BalanceSheetNavigation } from './BalanceSheetNavigation';
import { InvestmentsNavigation } from './Investments/InvestmentsNavigation';
import { SavingsNavigation } from './Savings/SavingsNavigation';

export const AuthenticatedDrawer = () => {
	const Drawer = createDrawerNavigator();

	const navigation = useNavigation<any>();

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
				name={AllNavigationName.dashboard}
				component={DashboardScreen}
				options={{
					drawerLabel: 'Home',
					drawerIcon: ({ color, size }) => (
						<Ionicons name='home' color={color} size={size} />
					),
				}}
			/>
			<Drawer.Screen
				name={AllNavigationName.balanceSheet}
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
				}}
			/>
			<Drawer.Screen
				name={AllNavigationName.investments}
				component={InvestmentsNavigation}
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
				name={AllNavigationName.savings}
				component={SavingsNavigation}
				options={{
					drawerLabel: 'Savings',
					drawerIcon: ({ color, size }) => (
						<MaterialIcons name='savings' color={color} size={size} />
					),
					headerRight: ({ tintColor }: any) => (
						<View style={styles.container}>
							<View style={styles.iconContainer}>
								<IconButton
									icon='add-circle-outline'
									color={tintColor}
									size={24}
									onPress={() =>
										navigation.navigate(AllNavigationName.addSavings)
									}
								/>
							</View>
							<IconButton
								icon='exit'
								color={tintColor}
								size={24}
								onPress={authCtx.logout}
							/>
						</View>
					),
				}}
			/>
			<Drawer.Screen
				name={AllNavigationName.expenses}
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

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	iconContainer: {
		marginRight: 20,
	},
});

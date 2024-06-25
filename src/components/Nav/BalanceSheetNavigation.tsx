import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AllNavigationName, Colors } from '../../constants';
import { UpdateBalanceSheet, ViewBalanceSheet } from '../../screens';

export const BalanceSheetNavigation = () => {
	const BottomTabs = createBottomTabNavigator();

	return (
		<BottomTabs.Navigator
			screenOptions={{
				headerShown: false,
				tabBarStyle: { backgroundColor: Colors.blue700 },
				tabBarActiveTintColor: Colors.white,
				tabBarInactiveTintColor: Colors.violet600,
			}}
		>
			<BottomTabs.Screen
				name={AllNavigationName.viewBalanceSheet}
				component={ViewBalanceSheet}
				options={{
					title: 'View Balance Sheet',
					tabBarLabel: 'View',
					tabBarIcon: ({ color, size }) => (
						<MaterialIcons name='preview' size={size} color={color} />
					),
				}}
			/>
			<BottomTabs.Screen
				name={AllNavigationName.updateBalanceSheet}
				component={UpdateBalanceSheet}
				options={{
					title: 'Update Balance Sheet',
					tabBarLabel: 'Update',
					tabBarIcon: ({ color, size }) => (
						<MaterialIcons name='update' size={size} color={color} />
					),
				}}
			/>
		</BottomTabs.Navigator>
	);
};

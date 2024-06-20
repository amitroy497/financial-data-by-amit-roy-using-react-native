import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { UpdateBalanceSheet, ViewBalanceSheet } from '../../screens';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../constants';

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
				name='ViewBalanceSheet'
				component={ViewBalanceSheet}
				options={{
					title: 'View Balance Sheet',
					tabBarLabel: 'View',
					tabBarIcon: ({ color, size }) => (
						<MaterialIcons name='preview' size={24} color={color} />
					),
				}}
			/>
			<BottomTabs.Screen
				name='UpdateBalanceSheet'
				component={UpdateBalanceSheet}
				options={{
					title: 'Update Balance Sheet',
					tabBarLabel: 'Update',
					tabBarIcon: ({ color, size }) => (
						<MaterialIcons name='update' size={24} color={color} />
					),
				}}
			/>
		</BottomTabs.Navigator>
	);
};

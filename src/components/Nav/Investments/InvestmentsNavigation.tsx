import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '../../../constants';
import { UpdateInvestments, ViewInvestments } from '../../../screens';
import { MaterialIcons } from '@expo/vector-icons';

export const InvestmentsNavigation = () => {
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
				name='ViewInvestments'
				component={ViewInvestments}
				options={{
					title: 'View Balance Sheet',
					tabBarLabel: 'View',
					tabBarIcon: ({ color, size }) => (
						<MaterialIcons name='preview' size={size} color={color} />
					),
				}}
			/>
			<BottomTabs.Screen
				name='UpdateInvestments'
				component={UpdateInvestments}
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

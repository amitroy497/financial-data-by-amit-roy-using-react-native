import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AllNavigationName, Colors } from '../../../constants';
import { UpdateInvestments, ViewInvestments } from '../../../screens';

export const InvestmentsNavigationTabs = () => {
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
				name={AllNavigationName.viewInvestments}
				component={ViewInvestments}
				options={{
					title: 'View Investments',
					tabBarLabel: 'View',
					tabBarIcon: ({ color, size }) => (
						<MaterialIcons name='preview' size={size} color={color} />
					),
				}}
			/>
			<BottomTabs.Screen
				name={AllNavigationName.updateInvestments}
				component={UpdateInvestments}
				options={{
					title: 'Update Investments',
					tabBarLabel: 'Update',
					tabBarIcon: ({ color, size }) => (
						<MaterialIcons name='update' size={size} color={color} />
					),
				}}
			/>
		</BottomTabs.Navigator>
	);
};

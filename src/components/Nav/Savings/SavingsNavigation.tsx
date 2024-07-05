import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AllNavigationName } from '../../../constants';
import {
	AddSavingsScreen,
	MonthlySavingsDetailsScreen,
	MonthlySavingsScreen,
	SavingsScreen,
} from '../../../screens';

export const SavingsNavigation = () => {
	const Stack = createNativeStackNavigator();
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen
				name={AllNavigationName.yearlySavings}
				component={SavingsScreen}
			/>
			<Stack.Screen
				name={AllNavigationName.monthlySavings}
				component={MonthlySavingsScreen}
			/>
			<Stack.Screen
				name={AllNavigationName.monthlySavingsDetails}
				component={MonthlySavingsDetailsScreen}
			/>
			<Stack.Screen
				name={AllNavigationName.addSavings}
				component={AddSavingsScreen}
			/>
		</Stack.Navigator>
	);
};

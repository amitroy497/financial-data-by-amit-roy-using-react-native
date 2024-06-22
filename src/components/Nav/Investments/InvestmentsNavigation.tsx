import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
	InvestmentsScreen,
	MutualFundScreen,
	PPFScreen,
} from '../../../screens';
import { AllNavigationName } from '../../../constants';
import { InvestmentsNavigationTabs } from './InvestmentsNavigationTabs';

export const InvestmentsNavigation = () => {
	const Stack = createNativeStackNavigator();
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen
				name={AllNavigationName.allInvestments}
				component={InvestmentsScreen}
			/>
			<Stack.Screen
				name={AllNavigationName.mutualFunds}
				component={MutualFundScreen}
			/>
			<Stack.Screen name={AllNavigationName.ppf} component={PPFScreen} />
			<Stack.Screen
				name={AllNavigationName.investMentsNavigationTab}
				component={InvestmentsNavigationTabs}
			/>
		</Stack.Navigator>
	);
};

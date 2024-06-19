import { ScrollView, StyleSheet } from 'react-native';
import {
	ExpensesTile,
	InvestmentsTile,
	SavingsTile,
	WelcomeTile,
} from '../components';
import { Colors } from '../constants';

export const DashboardScreen = () => {
	return (
		<ScrollView style={styles.container}>
			<WelcomeTile />
			<InvestmentsTile />
			<SavingsTile />
			<ExpensesTile />
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.blue700,
	},
});

import { useLayoutEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import {
	ExpensesTile,
	InvestmentsTile,
	SavingsTile,
	WelcomeTile,
} from '../components';
import { Colors } from '../constants';
import { balanceSheetActions } from '../store';
import { fetchBalanceSheetDetails } from '../utils';

export const DashboardScreen = () => {
	const dispatch = useDispatch<any>();

	useLayoutEffect(() => {
		const getBalanceSheetData = async () => {
			try {
				const balanceSheetData = await fetchBalanceSheetDetails();
				dispatch(
					balanceSheetActions.setBalanceSheetDetails(balanceSheetData as never)
				);
			} catch (error) {}
		};

		getBalanceSheetData();
	}, []);

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

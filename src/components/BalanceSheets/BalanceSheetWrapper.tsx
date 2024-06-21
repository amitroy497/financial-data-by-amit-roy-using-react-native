import { useSelector } from 'react-redux';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { BalanceSheetContainer } from './BalanceSheetContainer';

export const BalanceSheetWrapper = ({ location }: { location: string }) => {
	const { balanceSheet: balanceSheetData } = useSelector(
		(s: any) => s.balanceSheet
	);

	return (
		<ScrollView style={styles.rootContainer}>
			<View style={styles.container}>
				<BalanceSheetContainer
					defaultValue={balanceSheetData?.data}
					updateId={balanceSheetData?.id}
					location={location}
				/>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	rootContainer: {
		padding: 2,
		margin: 12,
		borderWidth: 2,
		borderStyle: 'dotted',
	},
	container: {
		padding: 2,
		borderWidth: 2,
		borderStyle: 'dotted',
	},
});

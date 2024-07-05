import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { AddSavingsElement, DateInput } from '../../components';
import { AllLabels } from '../../constants';
import { formatDate } from '../../utils';

export const AddSavingsScreen = () => {
	const defaultValue = {
		date: formatDate(new Date().toDateString()),
		tataLargeMidRegMF: '0.00',
	};

	const [inputs, setInputs] = useState<any>(defaultValue);

	const inputChangedHandler = (inputIdentifier: any, enteredValue: string) => {
		setInputs((currentInputs: any) => {
			return {
				...currentInputs,
				[inputIdentifier]: enteredValue,
			};
		});
	};
	return (
		<ScrollView style={styles.rootContainer}>
			<View style={styles.container}>
				<View style={styles.dateContainer}>
					<Text style={styles.label}>Date</Text>
					<View style={styles.date}>
						<DateInput dateValue={inputs.date} setter={setInputs} />
					</View>
				</View>
				<AddSavingsElement
					label={AllLabels.tataLargeMidRegMF}
					onChangeText={inputChangedHandler.bind(this, 'tataLargeMidRegMF')}
					value={inputs.tataLargeMidRegMF}
					isBorder={true}
				/>
				<AddSavingsElement
					label={AllLabels.tataSmallRegMF}
					onChangeText={inputChangedHandler.bind(this, 'tataSmallRegMF')}
					value={inputs.tataSmallRegMF}
					isBorder={true}
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
	dateContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginVertical: 20,
		borderBottomWidth: 1,
		paddingBottom: 20,
	},
	date: {
		paddingHorizontal: 20,
	},
	label: {
		paddingHorizontal: 20,
		fontWeight: 'bold',
	},
});

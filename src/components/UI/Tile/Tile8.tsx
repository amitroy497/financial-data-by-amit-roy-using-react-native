import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Tile8Types } from '../../../constants/types';

export const Tile8 = ({
	date,
	principalAmount,
	totalAmount,
	isUpdate,
	setData,
	reset,
}: Tile8Types) => {
	const initialState = {
		date,
		principalAmount,
		totalAmount,
	};

	const [inputs, setInputs] = useState({ ...initialState });

	const inputChangedHandler = (inputIdentifier: any, enteredValue: string) => {
		setInputs((currentInputs) => {
			return {
				...currentInputs,
				[inputIdentifier]: enteredValue,
			};
		});
	};

	return (
		<View style={styles.rootContainer}>
			<View style={styles.container}>
				<Text style={styles.date}>{inputs.date}</Text>
			</View>
			<View style={styles.container}>
				<Text style={styles.amount}>₹{inputs.principalAmount}</Text>
			</View>
			<View style={styles.container}>
				<Text style={styles.amount}>₹{inputs.totalAmount}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		flexDirection: 'row',
		alignSelf: 'stretch',
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 6,
		borderWidth: 1,
		borderStyle: 'dotted',
	},
	date: {
		textAlign: 'left',
	},
	amount: {
		textAlign: 'right',
	},
});

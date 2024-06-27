import RNDateTimePicker from '@react-native-community/datetimepicker';
import { useEffect, useState } from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { Tile8Types } from '../../../constants/types';
import { compareObjects, formatDate } from '../../../utils';
import { Input2 } from '../Inputs';

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
	const [cDate, setCDate] = useState(new Date());
	const [showPicker, setShowPicker] = useState<boolean>(false);

	const toggleDatePicker = () => {
		setShowPicker(!showPicker);
	};

	const onChange = ({ type }: { type: any }, selectedDate: any) => {
		if (type === 'set') {
			const currentDate = selectedDate;
			setCDate(currentDate);
			if (Platform.OS === 'android') {
				toggleDatePicker();
				setInputs((currentInputs) => {
					return {
						...currentInputs,
						date: formatDate(currentDate.toDateString()),
					};
				});
			}
		} else {
			toggleDatePicker();
		}
	};

	const inputChangedHandler = (inputIdentifier: any, enteredValue: string) => {
		setInputs((currentInputs) => {
			return {
				...currentInputs,
				[inputIdentifier]: enteredValue,
			};
		});
	};

	useEffect(() => {
		if (isUpdate && !compareObjects(initialState, inputs)) {
			setData({ ...inputs });
		}
		if (reset) {
			setInputs({ ...initialState });
		}
	}, [isUpdate, inputs, compareObjects]);

	return (
		<View style={styles.rootContainer}>
			<View style={styles.container}>
				{isUpdate ? (
					<>
						{showPicker ? (
							<RNDateTimePicker
								mode='date'
								display='spinner'
								value={cDate}
								onChange={onChange}
							/>
						) : (
							<Pressable onPress={toggleDatePicker}>
								<Text style={styles.date}>{inputs.date}</Text>
							</Pressable>
						)}
					</>
				) : (
					<Text style={styles.date}>{inputs.date}</Text>
				)}
			</View>
			<View style={styles.container}>
				{isUpdate ? (
					<Input2
						style={styles.input}
						value={inputs.principalAmount}
						onChangeText={inputChangedHandler.bind(this, 'principalAmount')}
					/>
				) : (
					<Text style={styles.amount}>₹{inputs.principalAmount}</Text>
				)}
			</View>
			<View style={styles.container}>
				{isUpdate ? (
					<Input2
						style={styles.input}
						value={inputs.totalAmount}
						onChangeText={inputChangedHandler.bind(this, 'totalAmount')}
					/>
				) : (
					<Text style={styles.amount}>₹{inputs.totalAmount}</Text>
				)}
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
	input: {
		textAlign: 'right',
	},
});

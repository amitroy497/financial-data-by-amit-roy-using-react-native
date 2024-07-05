import RNDateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { Platform, Pressable, StyleSheet, Text } from 'react-native';
import { formatDate } from '../../../utils';

export const DateInput = ({
	dateValue,
	setter,
}: {
	dateValue: string;
	setter: any;
}) => {
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
				setter((currentInputs: any) => {
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

	return (
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
					<Text style={styles.date}>{dateValue}</Text>
				</Pressable>
			)}
		</>
	);
};

const styles = StyleSheet.create({
	date: {
		textAlign: 'left',
	},
});

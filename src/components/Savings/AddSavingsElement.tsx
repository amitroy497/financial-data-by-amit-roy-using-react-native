import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants';
import { Input2 } from '../UI';

export const AddSavingsElement = ({
	label,
	onChangeText,
	value,
	isBorder,
}: {
	label: string;
	onChangeText: any;
	value: string;
	isBorder: boolean;
}) => {
	const styles = StyleSheet.create({
		container: {
			borderBottomWidth: isBorder ? 1 : 0,
			paddingVertical: 20,
		},
		label: {
			paddingHorizontal: 20,
			fontWeight: 'bold',
		},
		inputContainer: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'flex-end',
			marginTop: 10,
			paddingHorizontal: 20,
		},
		inputText: {
			marginRight: 10,
		},
		input: {
			borderWidth: 1,
			borderColor: Colors.grey400,
			paddingVertical: 2,
			paddingHorizontal: 8,
			width: 120,
			textAlign: 'right',
		},
	});

	return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>
			<View style={styles.inputContainer}>
				<Text style={styles.inputText}>₹</Text>
				<Input2
					style={styles.input}
					onChangeText={onChangeText}
					value={value}
				/>
			</View>
		</View>
	);
};

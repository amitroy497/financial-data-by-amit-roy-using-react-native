import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { InputTypes } from '../../constants/types';
import { Colors } from '../../constants';

export const Input = ({
	isInvalid,
	keyboardType,
	onUpdateValue,
	placeholder,
	secure,
	value,
}: InputTypes) => {
	return (
		<TextInput
			placeholder={placeholder}
			autoCorrect={false}
			autoCapitalize='none'
			secureTextEntry={secure}
			onChangeText={onUpdateValue}
			value={value}
			keyboardType={keyboardType}
			style={styles.input}
		/>
	);
};

const styles = StyleSheet.create({
	input: {
		backgroundColor: Colors.white,
		padding: 8,
		borderRadius: 8,
		width: '60%',
		marginVertical: 6,
	},
});

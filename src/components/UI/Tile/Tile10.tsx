import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../constants';
import { Tile10Types } from '../../../constants/types';

export const Tile10 = ({
	header,
	label,
	amount,
	gradient,
	onPress,
}: Tile10Types) => {
	return (
		<Pressable onPress={onPress} style={styles.container}>
			<LinearGradient colors={gradient} style={styles.gradient}>
				<Text style={styles.headerText}>{header}</Text>
				<View style={styles.amountContainer}>
					<Text style={styles.amountLabel}>{label}</Text>
					<Text style={styles.amountText}>₹{amount}</Text>
				</View>
			</LinearGradient>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	container: {
		marginVertical: 20,
		marginHorizontal: 20,
		overflow: 'hidden',
		borderRadius: 15,
	},
	gradient: {
		paddingVertical: 20,
		paddingHorizontal: 30,
	},
	headerText: {
		color: Colors.white,
		fontWeight: 'bold',
		fontSize: 24,
	},
	amountContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 15,
	},
	amountLabel: {
		color: Colors.grey400,
		fontSize: 18,
		fontWeight: 'bold',
	},
	amountText: {
		color: Colors.grey400,
		fontSize: 18,
	},
});

import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Tile11 } from '../../components';
import { ScreenTypes } from '../../constants/types';

export const MonthlySavingsDetailsScreen = ({ route }: ScreenTypes) => {
	console.log('route', route?.params?.code);
	console.log('details', route?.params?.details);

	const monthlySavingsDetails = route?.params?.details;

	return (
		<>
			<Tile11 label={route?.params?.label} amount={route?.params?.amount} />
			<ScrollView style={styles.rootContainer}>
				<View style={styles.container}>
					{monthlySavingsDetails?.map((item: any, index: number) => (
						<View
							key={index}
							style={[
								styles.itemContainer,
								index === monthlySavingsDetails?.length - 1 && styles.noBorder,
							]}
						>
							<Text style={styles.label}>{item?.label}</Text>
							<Text style={styles.text}>₹{item?.total}</Text>
						</View>
					))}
				</View>
			</ScrollView>
		</>
	);
};

const styles = StyleSheet.create({
	rootContainer: {
		margin: 12,
		padding: 6,
		borderWidth: 2,
		borderStyle: 'dotted',
	},
	container: {
		flex: 1,
		paddingHorizontal: 5,
		paddingVertical: 20,
		borderWidth: 2,
		borderStyle: 'dotted',
	},
	itemContainer: {
		borderBottomWidth: 1,
		paddingVertical: 20,
	},
	noBorder: {
		borderBottomWidth: 0,
	},
	label: {
		fontWeight: 'bold',
		marginHorizontal: 20,
		marginBottom: 10,
	},
	text: {
		textAlign: 'right',
		marginHorizontal: 20,
	},
});

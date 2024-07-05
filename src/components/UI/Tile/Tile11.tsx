import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../constants';
import { BackButton } from '../BackButton';

const backgroundImage = require('../../../images/db-portfolio-head.png');

export const Tile11 = ({
	label,
	amount,
}: {
	label: string;
	amount: string;
}) => {
	return (
		<LinearGradient colors={Colors.gradient3} style={styles.container}>
			<ImageBackground
				source={backgroundImage}
				resizeMode='cover'
				style={styles.imageBackground}
			>
				<BackButton />
				<View style={styles.itemContainer}>
					<Text style={styles.label}>{label}</Text>
					<View style={styles.amountContainer}>
						<Text style={styles.amountLabel}>Total Amount</Text>
						<Text style={styles.amount}>₹{amount}</Text>
					</View>
				</View>
			</ImageBackground>
		</LinearGradient>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 6,
	},
	imageBackground: {
		flexDirection: 'row',
	},
	itemContainer: {
		flex: 1,
		paddingRight: 30,
	},
	label: {
		fontSize: 24,
		fontWeight: 'bold',
		color: Colors.white,
	},
	amountContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 10,
	},
	amountLabel: {
		color: Colors.white,
		fontSize: 16,
	},
	amount: {
		color: Colors.lime,
		fontSize: 18,
		fontWeight: 'bold',
		marginLeft: 5,
	},
});

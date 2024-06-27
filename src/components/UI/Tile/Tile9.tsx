import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../constants';

export const Tile9 = ({ children }: { children: ReactNode }) => {
	return (
		<View style={styles.rootContainer}>
			<View style={styles.headerContainer}>
				<View style={styles.headerTextContainer}>
					<Text style={styles.headerText}>Date</Text>
				</View>
				<View style={styles.headerTextContainer}>
					<Text style={styles.headerText}>Invested</Text>
				</View>
				<View style={styles.headerTextContainer}>
					<Text style={styles.headerText}>Balance</Text>
				</View>
			</View>
			{children}
		</View>
	);
};

const styles = StyleSheet.create({
	rootContainer: {
		justifyContent: 'center',
		borderWidth: 2,
		borderStyle: 'dotted',
		padding: 2,
		marginHorizontal: 4,
		marginVertical: 10,
	},
	headerContainer: {
		flex: 1,
		flexDirection: 'row',
		alignSelf: 'stretch',
		backgroundColor: Colors.blue400,
	},
	headerTextContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 1,
		borderStyle: 'dotted',
		borderColor: Colors.white,
	},
	headerText: {
		fontWeight: 'bold',
		color: Colors.white,
		fontSize: 16,
	},
});

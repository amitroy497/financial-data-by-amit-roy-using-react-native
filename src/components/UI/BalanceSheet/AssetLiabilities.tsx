import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../constants';
import { AssetsLiabilitiesTypes } from '../../../constants/types';

export const AssetsLiabilities = ({ label, value }: AssetsLiabilitiesTypes) => {
	return (
		<View
			style={[
				styles.container,
				label === 'Assets' ? styles.assets : styles.liabilities,
			]}
		>
			<Text style={styles.text}>{label}</Text>
			<Text style={styles.text}>₹{value}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 4,
		paddingHorizontal: 10,
	},
	assets: {
		backgroundColor: Colors.green700,
	},
	liabilities: {
		backgroundColor: Colors.red400,
	},
	text: {
		fontWeight: 'bold',
		color: Colors.white,
	},
});

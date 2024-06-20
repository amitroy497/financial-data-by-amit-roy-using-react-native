import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../constants';
import { AssetsLiabilitiesTypes } from '../../../constants/types';

export const AssetsLiabilitiesSubHeader = ({
	label,
	location,
	value,
}: AssetsLiabilitiesTypes) => {
	return (
		<View style={styles.container}>
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
		marginTop: 10,
		marginBottom: 15,
	},
	text: {
		fontWeight: 'bold',
		color: Colors.violet700,
	},
});

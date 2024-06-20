import { StyleSheet, Text, View } from 'react-native';
import { AssetsLiabilitiesTypes } from '../../../constants/types';

export const AssetLiabilitiesDetails = ({
	label,
	location,
	value,
}: AssetsLiabilitiesTypes) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{label}</Text>
			<Text>₹{value}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: 4,
	},
	text: {
		fontWeight: 'bold',
	},
});

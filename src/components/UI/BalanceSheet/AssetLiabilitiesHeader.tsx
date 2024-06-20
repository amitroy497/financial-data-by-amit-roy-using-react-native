import { StyleSheet, Text, View } from 'react-native';
import { AssetLiabilitiesHeaderTypes } from '../../../constants/types';

export const AssetLiabilitiesHeader = ({
	label,
	location,
	value,
	textColor,
}: AssetLiabilitiesHeaderTypes) => {
	const styles = StyleSheet.create({
		container: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			marginTop: 15,
			marginBottom: 12,
		},
		text: {
			fontWeight: 'bold',
			color: textColor,
		},
	});

	return (
		<View style={styles.container}>
			<Text style={styles.text}>{label}</Text>
			<Text style={styles.text}>₹{value}</Text>
		</View>
	);
};

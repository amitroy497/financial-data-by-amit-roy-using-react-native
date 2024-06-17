import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { LoadingOverlayTypes } from '../../constants/types';

export const LoadingOverlay = ({ message }: LoadingOverlayTypes) => {
	return (
		<View style={styles.rootContainer}>
			<Text style={styles.message}>{message}</Text>
			<ActivityIndicator size='large' />
		</View>
	);
};

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 32,
	},
	message: {
		fontSize: 16,
		marginBottom: 12,
	},
});
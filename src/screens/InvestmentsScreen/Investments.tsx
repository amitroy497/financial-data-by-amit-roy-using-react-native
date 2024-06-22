import { ScrollView, StyleSheet, View } from 'react-native';
import { Tile3, Tile4 } from '../../components';
import { Colors } from '../../constants';

export const Investments = () => {
	return (
		<View style={styles.rootContainer}>
			<ScrollView style={styles.container}>
				<Tile3 investedValue='1000' marketValue='2000' />
				<View>
					<Tile4 investedValue='1000' marketValue='2000' />
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		backgroundColor: Colors.blue700,
	},
	container: {
		marginVertical: 20,
		marginHorizontal: 15,
	},
});

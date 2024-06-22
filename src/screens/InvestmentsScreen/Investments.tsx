import { ScrollView, StyleSheet, View } from 'react-native';
import { Tile3, Tile4 } from '../../components';

export const Investments = () => {
	return (
		<ScrollView style={styles.container}>
			<Tile3 investedValue='1000' marketValue='2000' />
			<View>
				<Tile4 />
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		marginVertical: 20,
		marginHorizontal: 15,
	},
});

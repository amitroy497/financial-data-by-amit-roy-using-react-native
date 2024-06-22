import { StyleSheet, Text, View } from 'react-native';
import { Tile2 } from '../../components';
import { Colors } from '../../constants';
import { ScrollView } from 'react-native-gesture-handler';

export const ViewInvestments = () => {
	const NIMF = require('../../images/nimf.png');
	return (
		<ScrollView style={styles.tilesContainer}>
			<Tile2
				imageSource={NIMF}
				gradientColor={Colors.gradient1}
				fundLabel='Nippon India Mutual Fund'
				holdingPercentage='24'
				investedValue='900.23'
				marketValue='1000.67'
			/>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	tilesContainer: {
		marginVertical: 20,
		marginHorizontal: 15,
	},
});

import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Tile } from '../UI';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../../constants';

const InvestmentBackground = require('../../images/dashboardSecond.png');

export const InvestmentsTile = () => {
	const navigation = useNavigation();

	return (
		<Pressable
			onPress={() => navigation.navigate('Investments' as never)}
			android_ripple={{ color: Colors.white }}
		>
			<Tile image={InvestmentBackground}>
				<View style={styles.headerContainer}>
					<View style={styles.headerTextContainer}>
						<Text style={styles.headerText}>View</Text>
						<Text style={[styles.headerText, styles.headerBoldText]}>
							Portfolio
						</Text>
					</View>
					<View style={styles.iconContainer}>
						<MaterialCommunityIcons
							name='cash-multiple'
							color={Colors.yellow700}
							size={26}
						/>
					</View>
				</View>
				<View style={styles.quickOverviewContainer}>
					<Text style={styles.quickOverviewText}>
						Quick overview of your holdings
					</Text>
				</View>
			</Tile>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	headerContainer: {
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
	headerTextContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	headerText: {
		fontSize: 24,
		color: Colors.white,
	},
	headerBoldText: {
		fontWeight: 'bold',
		marginHorizontal: 6,
	},
	iconContainer: {
		alignItems: 'center',
	},
	quickOverviewContainer: {
		marginTop: 10,
	},
	quickOverviewText: {
		color: Colors.grey400,
	},
});
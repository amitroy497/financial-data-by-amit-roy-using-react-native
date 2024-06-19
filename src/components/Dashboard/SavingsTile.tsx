import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Tile } from '../UI';
import { Colors } from '../../constants';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SavingsBackground = require('../../images/dashboardThird.png');

export const SavingsTile = () => {
	const navigation = useNavigation();

	return (
		<Pressable
			onPress={() => navigation.navigate('Savings' as never)}
			android_ripple={{ color: Colors.white }}
		>
			<Tile image={SavingsBackground}>
				<View style={styles.headerContainer}>
					<View style={styles.headerTextContainer}>
						<Text style={styles.headerText}>View your</Text>
						<Text style={[styles.headerText, styles.headerBoldText]}>
							Savings
						</Text>
					</View>
					<View style={styles.iconContainer}>
						<MaterialIcons name='savings' color={Colors.yellow700} size={26} />
					</View>
				</View>
				<View style={styles.savingsOverviewContainer}>
					<Text style={styles.savingsOverviewText}>
						All your savings in a single place
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
		flex: 1,
		alignItems: 'center',
	},
	savingsOverviewContainer: {
		marginTop: 10,
	},
	savingsOverviewText: {
		color: Colors.grey400,
	},
});

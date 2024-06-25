import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AllNavigationName, Colors } from '../../constants';
import { Tile1 } from '../UI';

const SavingsBackground = require('../../images/dashboardThird.png');

export const SavingsTile = () => {
	const navigation = useNavigation();

	return (
		<Pressable
			onPress={() => navigation.navigate(AllNavigationName.savings as never)}
			android_ripple={{ color: Colors.white }}
		>
			<Tile1 image={SavingsBackground}>
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
			</Tile1>
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
	savingsOverviewContainer: {
		marginTop: 10,
	},
	savingsOverviewText: {
		color: Colors.grey400,
	},
});

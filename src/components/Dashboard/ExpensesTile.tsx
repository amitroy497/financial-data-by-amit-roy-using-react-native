import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AllNavigationName, Colors } from '../../constants';
import { Tile1 } from '../UI';

const ExpenseBackground = require('../../images/dashboardFourth.png');

export const ExpensesTile = () => {
	const navigation = useNavigation();
	return (
		<Pressable
			onPress={() => navigation.navigate(AllNavigationName.expenses as never)}
			android_ripple={{ color: Colors.white }}
		>
			<Tile1 image={ExpenseBackground}>
				<View style={styles.headerContainer}>
					<View style={styles.headerTextContainer}>
						<Text style={styles.headerText}>View your</Text>
						<Text style={[styles.headerText, styles.headerBoldText]}>
							Expenses
						</Text>
					</View>
					<View style={styles.iconContainer}>
						<AntDesign name='rocket1' size={26} color={Colors.yellow700} />
					</View>
				</View>
				<View style={styles.expensesOverviewContainer}>
					<Text style={styles.expensesOverviewText}>
						All your expenses in a single place
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
	expensesOverviewContainer: {
		marginTop: 10,
	},
	expensesOverviewText: {
		color: Colors.grey400,
	},
});

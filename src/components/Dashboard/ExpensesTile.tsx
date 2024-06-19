import { Pressable, StyleSheet, Text, View } from 'react-native';
// import { GiExpense } from 'react-icons/gi';
import { Tile } from '../UI';
import { Colors } from '../../constants';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ExpenseBackground = require('../../images/dashboardFourth.png');

export const ExpensesTile = () => {
	const navigation = useNavigation();
	return (
		<Pressable
			onPress={() => navigation.navigate('Expenses' as never)}
			android_ripple={{ color: Colors.white }}
		>
			<Tile image={ExpenseBackground}>
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
	expensesOverviewContainer: {
		marginTop: 10,
	},
	expensesOverviewText: {
		color: Colors.grey400,
	},
});

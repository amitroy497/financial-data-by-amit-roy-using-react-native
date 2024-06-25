import { Octicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../constants';
import { Tile3Types } from '../../../constants/types';
import { ABSOLUTE, PERCENTAGE, SUBTRACT } from '../../../utils';

export const Tile3 = ({ investedValue, marketValue }: Tile3Types) => {
	const gainLossValue = SUBTRACT([+investedValue, +marketValue]);

	return (
		<LinearGradient colors={Colors.gradient3} style={styles.gradient}>
			<View>
				<View style={styles.portfolioTextContainer}>
					<Text style={styles.my}>My</Text>
					<Text style={styles.portfolio}>Portfolio</Text>
				</View>
				<View style={styles.detailContainer}>
					<View style={styles.detailLabelValueContainer}>
						<Text style={styles.detailLabel}>Invested Value</Text>
						<Text style={[styles.detailLabel, styles.middleBox]}>
							Market Value
						</Text>
						<Text style={styles.detailLabel}>Gain/Loss</Text>
					</View>
					<View style={styles.detailLabelValueContainer}>
						<Text style={styles.detailText}>₹{investedValue}</Text>
						<Text style={[styles.detailText, styles.middleBox]}>
							₹{marketValue}
						</Text>
						<Text style={styles.detailText}>₹{ABSOLUTE(gainLossValue)}</Text>
					</View>
					<View style={styles.detailPercentageContainer}>
						<View></View>
						<View style={styles.detailPercentageMiddleLabel}></View>
						<View style={styles.detailPercentageSubContainer}>
							<Octicons
								name={gainLossValue > 0 ? 'triangle-up' : 'triangle-down'}
								color={gainLossValue > 0 ? Colors.lime : Colors.red400}
								size={23}
							/>
							<Text
								style={[
									styles.detailTextPercent,
									{ color: gainLossValue > 0 ? Colors.lime : Colors.red400 },
								]}
							>
								{PERCENTAGE(gainLossValue, investedValue)}
							</Text>
						</View>
					</View>
				</View>
			</View>
			<View></View>
		</LinearGradient>
	);
};

const styles = StyleSheet.create({
	gradient: {
		padding: 12,
		borderRadius: 15,
		overflow: 'hidden',
	},
	portfolioTextContainer: {
		flexDirection: 'row',
	},
	my: {
		color: Colors.white,
		marginRight: 8,
		fontSize: 24,
	},
	portfolio: {
		color: Colors.white,
		fontWeight: 'bold',
		fontSize: 24,
	},
	middleBox: {
		marginVertical: 15,
	},
	detailContainer: {
		flexDirection: 'row',
		marginVertical: 10,
		alignItems: 'center',
		height: 94,
	},
	detailLabelValueContainer: {
		marginRight: 5,
		justifyContent: 'center',
	},
	detailLabel: {
		color: Colors.text1,
		fontSize: 14,
	},
	detailText: {
		fontWeight: 'bold',
		fontSize: 15,
		color: Colors.white,
		width: 110,
		textAlign: 'right',
		marginRight: 15,
	},
	detailPercentageContainer: {
		height: '100%',
		justifyContent: 'flex-end',
	},
	detailPercentageMiddleLabel: {
		paddingVertical: 15,
	},
	detailPercentageSubContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	detailTextPercent: {
		fontSize: 16,
		fontWeight: 'bold',
		marginLeft: 5,
	},
});

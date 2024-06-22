import { LinearGradient } from 'expo-linear-gradient';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../constants';
import { AntDesign } from '@expo/vector-icons';
import { Tile4Types } from '../../../constants/types';
import { PERCENTAGE, SUBTRACT } from '../../../utils';

const investedIcon = require('../../../images/invested-value-icon.png');
const middleIcon = require('../../../images/market-value-icon.png');
const gainLossIcon = require('../../../images/gain-loss-icon.png');

export const Tile4 = ({ investedValue, marketValue }: Tile4Types) => {
	const gainLossValue = SUBTRACT([+investedValue, +marketValue]);

	return (
		<View style={styles.container}>
			<Pressable
				style={({ pressed }) => pressed && styles.pressed}
				android_ripple={{ color: Colors.white }}
			>
				<LinearGradient colors={Colors.gradient5} style={styles.gradient}>
					<Text style={styles.labelText}>Mutual Funds</Text>
					<View style={styles.detailContainer}>
						<View style={styles.iconContainer}>
							<Image source={investedIcon} width={20} height={20} />
							<Image
								source={middleIcon}
								width={20}
								height={20}
								style={styles.middleBox}
							/>
							<Image source={gainLossIcon} width={20} height={20} />
						</View>
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
							<Text style={styles.detailText}>
								₹{Math.abs(+gainLossValue).toFixed(2)}
							</Text>
						</View>
						<View style={styles.detailPercentageContainer}>
							<View></View>
							<View style={styles.detailPercentageMiddleLabel}></View>
							<View style={styles.detailPercentageSubContainer}>
								<AntDesign
									name={gainLossValue > 0 ? 'arrowup' : 'arrowdown'}
									color={gainLossValue > 0 ? Colors.lime : Colors.red400}
									size={18}
								/>
								<Text
									style={[
										styles.detailTextPercent,
										{ color: gainLossValue > 0 ? Colors.lime : Colors.red400 },
									]}
								>
									{PERCENTAGE(gainLossValue, investedValue)}%
								</Text>
							</View>
						</View>
					</View>
				</LinearGradient>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginVertical: 20,
		overflow: 'hidden',
		borderRadius: 15,
	},
	pressed: {
		opacity: 0.7,
	},
	gradient: {
		padding: 12,
	},
	labelText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: Colors.white,
	},
	detailContainer: {
		flexDirection: 'row',
		marginVertical: 10,
		alignItems: 'center',
		height: 94,
	},
	iconContainer: {
		marginRight: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	middleBox: {
		marginVertical: 15,
	},
	detailLabelValueContainer: {
		marginRight: 2,
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
		width: 90,
		textAlign: 'right',
		marginRight: 5,
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

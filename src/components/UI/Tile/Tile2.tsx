import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Tile2Types } from '../../../constants/types';
import { Colors } from '../../../constants';
import { AntDesign } from '@expo/vector-icons';
import { PERCENTAGE, SUBTRACT } from '../../../utils';

const investedIcon = require('../../../images/invested-value-icon.png');
const middleIcon = require('../../../images/market-value-icon.png');
const gainLossIcon = require('../../../images/gain-loss-icon.png');

export const Tile2 = ({
	imageSource,
	fundLabel,
	holdingPercentage,
	gradientColor,
	investedValue,
	marketValue,
}: Tile2Types) => {
	const gainLossValue = SUBTRACT([+investedValue, +marketValue]);

	return (
		<Pressable style={styles.pressable}>
			<LinearGradient colors={gradientColor} style={styles.gradient}>
				<View style={styles.subContainer1}>
					<View style={styles.imageContainer}>
						<Image source={imageSource} style={styles.image} />
					</View>
					<View style={styles.fundLabelContainer}>
						<Text style={styles.fundLabelText}>{fundLabel}</Text>
						<View style={styles.holdingContainer}>
							<Text style={styles.holdingPercentLabel}>
								Holding Percentage:
							</Text>
							<Text style={styles.holdingPercentValue}>
								{holdingPercentage}%
							</Text>
						</View>
					</View>
				</View>
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
	);
};

export const styles = StyleSheet.create({
	pressable: {
		marginVertical: 10,
		overflow: 'hidden',
		borderRadius: 15,
	},
	gradient: {
		padding: 12,
	},
	subContainer1: {
		flexDirection: 'row',
	},
	imageContainer: {
		width: 60,
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.white,
		borderRadius: 15,
		padding: 6,
	},
	image: {
		width: 40,
		height: 40,
		resizeMode: 'contain',
	},
	fundLabelContainer: {
		justifyContent: 'center',
		marginLeft: 20,
	},
	fundLabelText: {
		color: Colors.text1,
		textTransform: 'uppercase',
		fontWeight: 'bold',
		fontSize: 15,
	},
	holdingContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 10,
	},
	holdingPercentLabel: {
		color: Colors.text1,
		fontSize: 14,
		marginRight: 6,
	},
	holdingPercentValue: {
		color: Colors.white,
		fontSize: 15,
		fontWeight: 'bold',
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

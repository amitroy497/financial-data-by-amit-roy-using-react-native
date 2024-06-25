import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { AllLabels, Colors, ScreenRedirection } from '../../../constants';
import { Tile4Types } from '../../../constants/types';
import { ABSOLUTE, PERCENTAGE, SUBTRACT } from '../../../utils';

const investedIcon = require('../../../images/invested-value-icon.png');
const middleIcon = require('../../../images/market-value-icon.png');
const gainLossIcon = require('../../../images/gain-loss-icon.png');

export const Tile4 = ({ label, investedValue, marketValue }: Tile4Types) => {
	const navigation = useNavigation();

	const gainLossValue = SUBTRACT([+investedValue, +marketValue]);

	const screenObj = ScreenRedirection.find((item) => item?.label === label);

	const onPressHandler = () => {
		navigation.navigate(screenObj?.route as never);
	};

	return (
		<View style={styles.container}>
			<Pressable
				style={({ pressed }) => pressed && styles.pressed}
				android_ripple={{ color: Colors.white }}
				onPress={onPressHandler}
			>
				<LinearGradient colors={screenObj?.gradient!} style={styles.gradient}>
					<Text style={styles.labelText}>{label}</Text>
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
						<View style={styles.detailLabelContainer}>
							<Text style={styles.detailLabel}>
								{label === AllLabels.ppf
									? AllLabels.principalAmount
									: AllLabels.investValue}
							</Text>
							<Text style={[styles.detailLabel, styles.middleBox]}>
								{label === AllLabels.ppf
									? AllLabels.totalAmount
									: AllLabels.marketValue}
							</Text>
							<Text style={styles.detailLabel}>
								{label === AllLabels.ppf
									? AllLabels.interest
									: AllLabels.gainLoss}
							</Text>
						</View>
						<View style={styles.detailValueContainer}>
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
								<AntDesign
									name={gainLossValue > 0 ? 'arrowup' : 'arrowdown'}
									color={gainLossValue > 0 ? Colors.lime : Colors.red400}
									size={16}
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
		padding: 6,
	},
	labelText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: Colors.white,
		paddingHorizontal: 6,
		marginTop: 8,
		marginBottom: 10,
	},
	detailContainer: {
		flexDirection: 'row',
		marginVertical: 10,
		alignItems: 'center',
		height: 84,
	},
	iconContainer: {
		marginRight: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	middleBox: {
		marginVertical: 15,
	},
	detailLabelContainer: {
		marginRight: 2,
		justifyContent: 'center',
		width: '38%',
	},
	detailLabel: {
		color: Colors.text1,
		fontSize: 14,
		width: '100%',
	},
	detailValueContainer: {
		marginRight: 2,
		justifyContent: 'center',
		width: '27%',
	},
	detailText: {
		fontWeight: 'bold',
		fontSize: 14,
		color: Colors.white,
		textAlign: 'right',
		width: '100%',
	},
	detailPercentageContainer: {
		height: '100%',
		justifyContent: 'flex-end',
		marginLeft: 2,
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
		fontSize: 14,
		fontWeight: 'bold',
		marginLeft: 2,
		textAlign: 'right',
	},
});

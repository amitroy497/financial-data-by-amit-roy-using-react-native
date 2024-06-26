import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import {
	AllNavigationName,
	AsyncStorageName,
	Colors,
} from '../../../constants';

const investedIcon = require('../../../images/invested-value-icon.png');
const middleIcon = require('../../../images/market-value-icon.png');
const gainLossIcon = require('../../../images/gain-loss-icon.png');

export const Tile7 = ({
	defaultValue,
	gradientColor,
}: {
	defaultValue: any;
	gradientColor: any;
}) => {
	const navigation = useNavigation<any>();

	const onPressHandler = async () => {
		AsyncStorage.setItem(
			AsyncStorageName.investmentCode,
			defaultValue?.code.toString()
		);
		navigation.navigate(AllNavigationName.investMentsNavigationTab);
	};

	return (
		<Pressable
			style={({ pressed }) => pressed && styles.pressed}
			onPress={onPressHandler}
			android_ripple={{ color: Colors.white }}
		>
			<LinearGradient colors={gradientColor} style={styles.gradient}>
				<View style={styles.subContainer1}>
					<View style={styles.fundLabelContainer}>
						<Text style={styles.fundLabelText}>{defaultValue?.label}</Text>
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
						<Text style={styles.detailLabel}>Principal Amount</Text>
						<Text style={[styles.detailLabel, styles.middleBox]}>
							Total Amount
						</Text>
						<Text style={styles.detailLabel}>Interest</Text>
					</View>
					<View style={styles.detailLabelValueContainer}>
						<Text style={styles.detailText}>
							₹{defaultValue?.principalAmount}
						</Text>
						<Text style={[styles.detailText, styles.middleBox]}>
							₹{defaultValue?.totalAmount}
						</Text>
						<Text style={styles.detailText}>₹{defaultValue?.interest}</Text>
					</View>
					<View style={styles.detailPercentageContainer}>
						<View></View>
						<View style={styles.detailPercentageMiddleLabel}></View>
						<View style={styles.detailPercentageSubContainer}>
							<AntDesign name='arrowup' color={Colors.lime} size={18} />
							<Text style={styles.detailTextPercent}>
								{defaultValue?.growthPercentage}
							</Text>
						</View>
					</View>
				</View>
			</LinearGradient>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	pressed: {
		opacity: 0.7,
	},
	gradient: {
		padding: 12,
	},
	subContainer1: {
		flexDirection: 'row',
	},
	fundLabelContainer: {
		justifyContent: 'center',
		marginLeft: 8,
	},
	fundLabelText: {
		color: Colors.text1,
		textTransform: 'uppercase',
		fontWeight: 'bold',
		fontSize: 15,
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
		color: Colors.lime,
	},
});

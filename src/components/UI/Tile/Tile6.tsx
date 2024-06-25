import { AntDesign } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../constants';
import { Tile6Types } from '../../../constants/types';
import {
	ABSOLUTE,
	compareObjects,
	DIVIDE,
	PERCENTAGE,
	SUBTRACT,
} from '../../../utils';
import { Input2 } from '../Inputs';

export const Tile6 = ({
	code,
	label,
	investedValue,
	marketValue,
	gainLossValue,
	gainLossPercentage,
	nav,
	units,
	isUpdate,
	setData,
	reset,
}: Tile6Types) => {
	const initialState = {
		code,
		label,
		investedValue,
		marketValue,
		gainLossValue,
		gainLossPercentage,
		nav,
		units,
	};
	const [inputs, setInputs] = useState({ ...initialState });

	const inputChangedHandler = (inputIdentifier: any, enteredValue: string) => {
		setInputs((currentInputs) => {
			return {
				...currentInputs,
				[inputIdentifier]: enteredValue,
				gainLossValue: SUBTRACT([+inputs.investedValue, +inputs.marketValue]),
				gainLossPercentage: PERCENTAGE(
					inputs.gainLossValue,
					inputs.investedValue
				),
				nav: DIVIDE(inputs.marketValue, inputs.units),
			};
		});
	};

	useEffect(() => {
		if (isUpdate && !compareObjects(initialState, inputs)) {
			setData({ ...inputs });
		}
		if (reset) {
			setInputs({ ...initialState });
		}
	}, [isUpdate, inputs, compareObjects]);

	return (
		<View style={styles.rootContainer}>
			<View style={styles.container}>
				<Text style={styles.headerLabelText}>{label}</Text>
				<View style={styles.detailsContainer}>
					<View style={styles.detailsSubContainer}>
						<Text style={styles.labelText}>Invested Value</Text>
						{isUpdate ? (
							<Input2
								style={styles.input}
								value={inputs.investedValue}
								onChangeText={inputChangedHandler.bind(this, 'investedValue')}
							/>
						) : (
							<Text style={styles.amountText}>₹{inputs.investedValue}</Text>
						)}
					</View>
					<View style={styles.detailsSubContainer}>
						<Text style={styles.labelText}>Market Value</Text>
						{isUpdate ? (
							<Input2
								style={styles.input}
								value={inputs.marketValue}
								onChangeText={inputChangedHandler.bind(this, 'marketValue')}
							/>
						) : (
							<Text style={styles.amountText}>₹{inputs.marketValue}</Text>
						)}
					</View>
					<View style={styles.detailsSubContainer}>
						<Text style={styles.labelText}>Gain/Loss</Text>
						<Text style={styles.amountText}>
							₹{ABSOLUTE(inputs.gainLossValue)}
						</Text>
						<View style={styles.gainLossContainer}>
							<View style={styles.iconContainer}>
								<AntDesign
									name={+inputs.gainLossValue > 0 ? 'arrowup' : 'arrowdown'}
									size={18}
									color={
										+inputs.gainLossValue > 0 ? Colors.lime : Colors.red400
									}
								/>
							</View>
							<Text
								style={{
									color:
										+inputs.gainLossValue > 0 ? Colors.lime : Colors.red400,
								}}
							>
								{inputs.gainLossPercentage}
							</Text>
						</View>
					</View>
				</View>
				<View style={styles.lastContainer}>
					<View style={styles.navContainer}>
						<Text style={styles.navLabel}>NAV</Text>
						<Text style={styles.navText}>₹{inputs.nav}</Text>
					</View>
					<View style={styles.unitsContainer}>
						<Text style={styles.unitsLabel}>Units</Text>
						{isUpdate ? (
							<Input2
								style={styles.input}
								value={inputs.units}
								onChangeText={inputChangedHandler.bind(this, 'units')}
							/>
						) : (
							<Text style={styles.unitsText}>{inputs.units}</Text>
						)}
					</View>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	rootContainer: {
		padding: 2,
		margin: 20,
		borderWidth: 2,
		borderStyle: 'dotted',
		borderRadius: 15,
		backgroundColor: Colors.grey100,
	},
	container: {
		padding: 10,
		borderWidth: 2,
		borderStyle: 'dotted',
		borderRadius: 15,
	},
	headerLabelText: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	detailsContainer: {
		marginTop: 10,
	},
	detailsSubContainer: {
		flexDirection: 'row',
		marginVertical: 10,
		alignItems: 'center',
	},
	labelText: {
		width: '32%',
		marginRight: 10,
	},
	input: {
		borderWidth: 1,
		borderColor: Colors.grey400,
		padding: 2,
		width: '30%',
		textAlign: 'right',
	},
	amountText: {
		width: '30%',
		textAlign: 'right',
		fontWeight: 'bold',
		fontSize: 16,
	},
	gainLossContainer: {
		flexDirection: 'row',
		width: '35%',
		marginLeft: 15,
	},
	iconContainer: {
		marginRight: 6,
		marginTop: 2,
	},
	lastContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 20,
	},
	navContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	unitsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	navLabel: {
		marginRight: 10,
	},
	navText: {
		fontWeight: 'bold',
		fontSize: 16,
	},
	unitsLabel: {
		marginRight: 10,
	},
	unitsText: {
		fontWeight: 'bold',
		fontSize: 16,
	},
});

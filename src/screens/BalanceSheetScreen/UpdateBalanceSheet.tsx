import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants';
import {
	AssetLiabilitiesDetails,
	AssetLiabilitiesHeader,
	AssetsLiabilities,
	AssetsLiabilitiesSubHeader,
} from '../../components';
import { ViewBalanceSheetTypes } from '../../constants/types';

export const UpdateBalanceSheet = ({ route }: ViewBalanceSheetTypes) => {
	const { balanceSheet: balanceSheetData } = useSelector(
		(s: any) => s.balanceSheet
	);

	return (
		<ScrollView style={styles.rootContainer}>
			{balanceSheetData?.map((sheet: any, index: number) => (
				<View style={styles.container} key={index}>
					<AssetsLiabilities
						label='Assets'
						value={sheet?.data?.assets}
						location={route?.name}
					/>
					<View style={styles.mainDetailsContainer}>
						<AssetLiabilitiesHeader
							label='Current Assets'
							value={sheet?.data?.currentAssets}
							textColor={Colors.green700}
							location={route?.name}
						/>
						<View style={styles.subHeaderContainer}>
							<AssetsLiabilitiesSubHeader
								label='Cash'
								value={sheet?.data?.cash}
								location={route?.name}
							/>
							<AssetLiabilitiesDetails
								label='Axis Bank'
								value={sheet?.data?.axisBank}
								location={route?.name}
							/>
							<AssetLiabilitiesDetails
								label='AU Bank'
								value={sheet?.data?.auBank}
								location={route?.name}
							/>
							<AssetLiabilitiesDetails
								label='FI Bank'
								value={sheet?.data?.fiBank}
								location={route?.name}
							/>
							<AssetLiabilitiesDetails
								label='IDFC First Bank'
								value={sheet?.data?.idfcBank}
								location={route?.name}
							/>
							<AssetLiabilitiesDetails
								label='Kotak Mahindra Bank'
								value={sheet?.data?.kotakBank}
								location={route?.name}
							/>
							<AssetLiabilitiesDetails
								label='Punjab National Bank'
								value={sheet?.data?.pnbBank}
								location={route?.name}
							/>
							<AssetLiabilitiesDetails
								label='State Bank of India RIMS'
								value={sheet?.data?.sbiRmccBank}
								location={route?.name}
							/>
							<AssetLiabilitiesDetails
								label='State Bank of India Unitech'
								value={sheet?.data?.sbiUnitechBank}
								location={route?.name}
							/>
							<AssetLiabilitiesDetails
								label='UCO Bank'
								value={sheet?.data?.ucoBank}
								location={route?.name}
							/>
							<AssetLiabilitiesDetails
								label='Indian Bank'
								value={sheet?.data?.indianBank}
								location={route?.name}
							/>
						</View>
						<View style={styles.subHeaderContainer}>
							<AssetsLiabilitiesSubHeader
								label='Recurring Deposits'
								value={sheet?.data?.recurringDeposits}
								location={route?.name}
							/>
							<AssetLiabilitiesDetails
								label='AU Bank RD'
								value={sheet?.data?.auRD}
								location={route?.name}
							/>
							<AssetLiabilitiesDetails
								label='FI Bank RD'
								value={sheet?.data?.fiRD}
								location={route?.name}
							/>
							<AssetLiabilitiesDetails
								label='IDFC First Bank RD'
								value={sheet?.data?.idfcRD}
								location={route?.name}
							/>
							<AssetLiabilitiesDetails
								label='Kotak Mahindra Bank RD'
								value={sheet?.data?.kotakRD}
								location={route?.name}
							/>
							<AssetLiabilitiesDetails
								label='Punjab National Bank RD'
								value={sheet?.data?.kotakRD}
								location={route?.name}
							/>
							<AssetLiabilitiesDetails
								label='State Bank of India RD'
								value={sheet?.data?.sbiRD}
								location={route?.name}
							/>
						</View>
						<View style={styles.subHeaderContainer}>
							<AssetsLiabilitiesSubHeader
								label='Gold ETFs'
								value={sheet?.data?.goldETF}
								location={route?.name}
							/>
						</View>
						<View style={styles.subHeaderContainer}>
							<AssetsLiabilitiesSubHeader
								label='Shoonya ETFs'
								value={sheet?.data?.shoonyaETF}
								location={route?.name}
							/>
						</View>
						<AssetLiabilitiesHeader
							label='Long Term Assets'
							value={sheet?.data?.longTermAssets}
							textColor={Colors.green700}
							location={route?.name}
						/>
						<View style={styles.subHeaderContainer}>
							<AssetsLiabilitiesSubHeader
								label='Fixed Deposits'
								value={sheet?.data?.fixedDeposits}
								location={route?.name}
							/>
							<AssetLiabilitiesDetails
								label='AU Bank FD'
								value={sheet?.data?.auFD}
								location={route?.name}
							/>
						</View>
						<View style={styles.subHeaderContainer}>
							<AssetsLiabilitiesSubHeader
								label='Mutual Funds'
								value={sheet?.data?.mutualFunds}
								location={route?.name}
							/>
						</View>
						<View style={styles.subHeaderContainer}>
							<AssetsLiabilitiesSubHeader
								label='Public Provident Fund'
								value={sheet?.data?.ppf}
								location={route?.name}
							/>
						</View>
						<View style={styles.subHeaderContainer}>
							<AssetsLiabilitiesSubHeader
								label='National Pension Scheme'
								value={sheet?.data?.nps}
								location={route?.name}
							/>
						</View>
						<View style={styles.subHeaderContainer}>
							<AssetsLiabilitiesSubHeader
								label='Floating Rate Saving Bonds'
								value={sheet?.data?.frsb}
								location={route?.name}
							/>
						</View>
						<View style={styles.subHeaderContainer}>
							<AssetsLiabilitiesSubHeader
								label='Treasury Bills'
								value={sheet?.data?.tBills}
								location={route?.name}
							/>
						</View>
						<View style={styles.subHeaderContainer}>
							<AssetsLiabilitiesSubHeader
								label='Sovereign Gold Bonds'
								value={sheet?.data?.sgb}
								location={route?.name}
							/>
						</View>
					</View>
					<AssetsLiabilities
						label='Liabilities'
						value={sheet?.data?.liabilities}
						location={route?.name}
					/>
					<View style={styles.mainDetailsContainer}>
						<AssetLiabilitiesHeader
							label='Current Liabilities'
							value={sheet?.data?.currentLiabilities}
							textColor={Colors.red400}
							location={route?.name}
						/>
						<View style={styles.subHeaderContainer}>
							<AssetsLiabilitiesSubHeader
								label='Credit Cards'
								value={sheet?.data?.creditCards}
								location={route?.name}
							/>
							<AssetLiabilitiesDetails
								label='Citi Card'
								value={sheet?.data?.citiCard}
								location={route?.name}
							/>
							<AssetLiabilitiesDetails
								label='SBI Card'
								value={sheet?.data?.sbiCard}
								location={route?.name}
							/>
						</View>
						<AssetLiabilitiesHeader
							label='Long Term Liabilities'
							value={sheet?.data?.longTermLiabilities}
							textColor={Colors.red400}
							location={route?.name}
						/>
						<View style={styles.subHeaderContainer}>
							<AssetsLiabilitiesSubHeader
								label='Loans'
								value={sheet?.data?.loans}
								location={route?.name}
							/>
							<AssetLiabilitiesDetails
								label='Axis Bank Personal Loan'
								value={sheet?.data?.axisPl}
								location={route?.name}
							/>
							<AssetLiabilitiesDetails
								label='Mom'
								value={sheet?.data?.mom}
								location={route?.name}
							/>
							<AssetLiabilitiesDetails
								label='Citi Card Health Insurance'
								value={sheet?.data?.citiHis}
								location={route?.name}
							/>
						</View>
					</View>
				</View>
			))}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	rootContainer: {
		padding: 2,
		margin: 12,
		borderWidth: 2,
		borderStyle: 'dotted',
	},
	container: {
		padding: 2,
		borderWidth: 2,
		borderStyle: 'dotted',
	},
	mainDetailsContainer: {
		paddingVertical: 4,
		paddingHorizontal: 10,
	},
	subHeaderContainer: {
		marginBottom: 10,
	},
});

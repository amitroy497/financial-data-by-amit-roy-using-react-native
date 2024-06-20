import { useEffect, useLayoutEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import {
	AssetLiabilitiesDetails,
	AssetLiabilitiesHeader,
	AssetsLiabilities,
	AssetsLiabilitiesSubHeader,
} from '../UI';
import { Colors } from '../../constants';
import { SUM } from '../../utils';

export const BalanceSheetContainer = ({
	defaultValue,
	location,
}: {
	defaultValue: any;
	location: string;
}) => {
	const [inputs, setInputs] = useState({
		assets: defaultValue?.assets,
		currentAssets: defaultValue?.currentAssets,
		cash: defaultValue?.cash,
		axisBank: defaultValue?.axisBank,
		auBank: defaultValue?.auBank,
		fiBank: defaultValue?.fiBank,
		idfcBank: defaultValue?.idfcBank,
		kotakBank: defaultValue?.kotakBank,
		pnbBank: defaultValue?.pnbBank,
		sbiRmccBank: defaultValue?.sbiRmccBank,
		sbiUnitechBank: defaultValue?.sbiUnitechBank,
		ucoBank: defaultValue?.ucoBank,
		indianBank: defaultValue?.indianBank,
		recurringDeposits: defaultValue?.recurringDeposits,
		auRD: defaultValue?.auRD,
		fiRD: defaultValue?.fiRD,
		idfcRD: defaultValue?.idfcRD,
		kotakRD: defaultValue?.kotakRD,
		pnbRD: defaultValue?.pnbRD,
		sbiRD: defaultValue?.sbiRD,
		goldETF: defaultValue?.goldETF,
		shoonyaETF: defaultValue?.shoonyaETF,
		longTermAssets: defaultValue?.longTermAssets,
		fixedDeposits: defaultValue?.fixedDeposits,
		auFD: defaultValue?.auFD,
		mutualFunds: defaultValue?.mutualFunds,
		ppf: defaultValue?.ppf,
		nps: defaultValue?.nps,
		frsb: defaultValue?.frsb,
		tBills: defaultValue?.tBills,
		sgb: defaultValue?.sgb,
		liabilities: defaultValue?.liabilities,
		currentLiabilities: defaultValue?.currentLiabilities,
		creditCards: defaultValue?.creditCards,
		citiCard: defaultValue?.citiCard,
		sbiCard: defaultValue?.sbiCard,
		longTermLiabilities: defaultValue?.longTermLiabilities,
		loans: defaultValue?.loans,
		axisPl: defaultValue?.axisPl,
		mom: defaultValue?.mom,
		citiHis: defaultValue?.citiHis,
	});

	const [inputAssets, setInputAssets] = useState<string>('');

	useEffect(() => {
		const assetArray = [+inputs.currentAssets, +inputs.currentLiabilities];
		setInputAssets(SUM(assetArray));
	}, [inputs]);

	const inputChangedHandler = (inputIdentifier: any, enteredValue: string) => {
		setInputs((currentInputs) => {
			return {
				...currentInputs,
				[inputIdentifier]: { value: enteredValue, isValid: true },
			};
		});
	};

	return (
		<>
			<AssetsLiabilities
				label='Assets'
				value={inputAssets}
				location={location}
			/>
			<View style={styles.mainDetailsContainer}>
				<AssetLiabilitiesHeader
					label='Current Assets'
					value={inputs.currentAssets}
					textColor={Colors.green700}
					location={location}
				/>
				<View style={styles.subHeaderContainer}>
					<AssetsLiabilitiesSubHeader
						label='Cash'
						value={inputs.cash}
						location={location}
					/>
					<AssetLiabilitiesDetails
						label='Axis Bank'
						value={inputs.axisBank}
						location={location}
					/>
					<AssetLiabilitiesDetails
						label='AU Bank'
						value={inputs.auBank}
						location={location}
					/>
					<AssetLiabilitiesDetails
						label='FI Bank'
						value={inputs.fiBank}
						location={location}
					/>
					<AssetLiabilitiesDetails
						label='IDFC First Bank'
						value={inputs.idfcBank}
						location={location}
					/>
					<AssetLiabilitiesDetails
						label='Kotak Mahindra Bank'
						value={inputs.kotakBank}
						location={location}
					/>
					<AssetLiabilitiesDetails
						label='Punjab National Bank'
						value={inputs.pnbBank}
						location={location}
					/>
					<AssetLiabilitiesDetails
						label='State Bank of India RIMS'
						value={inputs.sbiRmccBank}
						location={location}
					/>
					<AssetLiabilitiesDetails
						label='State Bank of India Unitech'
						value={inputs.sbiUnitechBank}
						location={location}
					/>
					<AssetLiabilitiesDetails
						label='UCO Bank'
						value={inputs.ucoBank}
						location={location}
					/>
					<AssetLiabilitiesDetails
						label='Indian Bank'
						value={inputs.indianBank}
						location={location}
					/>
				</View>
				<View style={styles.subHeaderContainer}>
					<AssetsLiabilitiesSubHeader
						label='Recurring Deposits'
						value={inputs.recurringDeposits}
						location={location}
					/>
					<AssetLiabilitiesDetails
						label='AU Bank RD'
						value={inputs.auRD}
						location={location}
					/>
					<AssetLiabilitiesDetails
						label='FI Bank RD'
						value={inputs.fiRD}
						location={location}
					/>
					<AssetLiabilitiesDetails
						label='IDFC First Bank RD'
						value={inputs.idfcRD}
						location={location}
					/>
					<AssetLiabilitiesDetails
						label='Kotak Mahindra Bank RD'
						value={inputs.kotakRD}
						location={location}
					/>
					<AssetLiabilitiesDetails
						label='Punjab National Bank RD'
						value={inputs.kotakRD}
						location={location}
					/>
					<AssetLiabilitiesDetails
						label='State Bank of India RD'
						value={inputs.sbiRD}
						location={location}
					/>
				</View>
				<View style={styles.subHeaderContainer}>
					<AssetsLiabilitiesSubHeader
						label='Gold ETFs'
						value={inputs.goldETF}
						location={location}
					/>
				</View>
				<View style={styles.subHeaderContainer}>
					<AssetsLiabilitiesSubHeader
						label='Shoonya ETFs'
						value={inputs.shoonyaETF}
						location={location}
					/>
				</View>
				<AssetLiabilitiesHeader
					label='Long Term Assets'
					value={inputs.longTermAssets}
					textColor={Colors.green700}
					location={location}
				/>
				<View style={styles.subHeaderContainer}>
					<AssetsLiabilitiesSubHeader
						label='Fixed Deposits'
						value={inputs.fixedDeposits}
						location={location}
					/>
					<AssetLiabilitiesDetails
						label='AU Bank FD'
						value={inputs.auFD}
						location={location}
					/>
				</View>
				<View style={styles.subHeaderContainer}>
					<AssetsLiabilitiesSubHeader
						label='Mutual Funds'
						value={inputs.mutualFunds}
						location={location}
					/>
				</View>
				<View style={styles.subHeaderContainer}>
					<AssetsLiabilitiesSubHeader
						label='Public Provident Fund'
						value={inputs.ppf}
						location={location}
					/>
				</View>
				<View style={styles.subHeaderContainer}>
					<AssetsLiabilitiesSubHeader
						label='National Pension Scheme'
						value={inputs.nps}
						location={location}
					/>
				</View>
				<View style={styles.subHeaderContainer}>
					<AssetsLiabilitiesSubHeader
						label='Floating Rate Saving Bonds'
						value={inputs.frsb}
						location={location}
					/>
				</View>
				<View style={styles.subHeaderContainer}>
					<AssetsLiabilitiesSubHeader
						label='Treasury Bills'
						value={inputs.tBills}
						location={location}
					/>
				</View>
				<View style={styles.subHeaderContainer}>
					<AssetsLiabilitiesSubHeader
						label='Sovereign Gold Bonds'
						value={inputs.sgb}
						location={location}
					/>
				</View>
			</View>
			<AssetsLiabilities
				label='Liabilities'
				value={inputs.liabilities}
				location={location}
			/>
			<View style={styles.mainDetailsContainer}>
				<AssetLiabilitiesHeader
					label='Current Liabilities'
					value={inputs.currentLiabilities}
					textColor={Colors.red400}
					location={location}
				/>
				<View style={styles.subHeaderContainer}>
					<AssetsLiabilitiesSubHeader
						label='Credit Cards'
						value={inputs.creditCards}
						location={location}
					/>
					<AssetLiabilitiesDetails
						label='Citi Card'
						value={inputs.citiCard}
						location={location}
					/>
					<AssetLiabilitiesDetails
						label='SBI Card'
						value={inputs.sbiCard}
						location={location}
					/>
				</View>
				<AssetLiabilitiesHeader
					label='Long Term Liabilities'
					value={inputs.longTermLiabilities}
					textColor={Colors.red400}
					location={location}
				/>
				<View style={styles.subHeaderContainer}>
					<AssetsLiabilitiesSubHeader
						label='Loans'
						value={inputs.loans}
						location={location}
					/>
					<AssetLiabilitiesDetails
						label='Axis Bank Personal Loan'
						value={inputs.axisPl}
						location={location}
					/>
					<AssetLiabilitiesDetails
						label='Mom'
						value={inputs.mom}
						location={location}
					/>
					<AssetLiabilitiesDetails
						label='Citi Card Health Insurance'
						value={inputs.citiHis}
						location={location}
					/>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	mainDetailsContainer: {
		paddingVertical: 4,
		paddingHorizontal: 10,
	},
	subHeaderContainer: {
		marginBottom: 10,
	},
});

import { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import {
	AssetLiabilitiesDetails,
	AssetLiabilitiesHeader,
	AssetsLiabilities,
	AssetsLiabilitiesSubHeader,
	Button,
} from '../UI';
import { Colors } from '../../constants';
import { SUM, updateBalanceSheetDetails } from '../../utils';
import { balanceSheetActions } from '../../store';

export const BalanceSheetContainer = ({
	updateId,
	defaultValue,
	location,
}: {
	updateId: string;
	defaultValue: any;
	location: string;
}) => {
	const navigation = useNavigation();

	const dispatch = useDispatch();

	const initialState = {
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
	};
	const [inputs, setInputs] = useState({ ...initialState });

	const cashArray = [
		+inputs.axisBank,
		+inputs.auBank,
		+inputs.fiBank,
		+inputs.idfcBank,
		+inputs.pnbBank,
		+inputs.sbiRmccBank,
		+inputs.sbiUnitechBank,
		+inputs.sbiUnitechBank,
		+inputs.indianBank,
	];

	const rdArray = [
		+inputs.auRD,
		+inputs.fiRD,
		+inputs.idfcRD,
		+inputs.kotakRD,
		+inputs.pnbRD,
		+inputs.sbiRD,
	];

	const fixedArray = [+inputs.auFD];

	const creditArray = [+inputs.citiCard, +inputs.sbiCard];

	const loanArray = [+inputs.axisPl, +inputs.mom, +inputs.citiHis];

	const currentAssetsArray = [
		+inputs.cash,
		+inputs.recurringDeposits,
		+inputs.goldETF,
		+inputs.shoonyaETF,
	];

	const longTermAssetsArray = [
		+inputs.fixedDeposits,
		+inputs.mutualFunds,
		+inputs.ppf,
		+inputs.nps,
		+inputs.frsb,
		+inputs.tBills,
		+inputs.sgb,
	];

	const currentLiabilitiesArray = [+inputs.creditCards];

	const longTermLiabilitiesArray = [+inputs.loans];

	const assetsArray = [+inputs.currentAssets, +inputs.longTermAssets];

	const liabilitiesArray = [
		+inputs.currentLiabilities,
		+inputs.longTermLiabilities,
	];

	const inputChangedHandler = (inputIdentifier: any, enteredValue: string) => {
		setInputs((currentInputs) => {
			return {
				...currentInputs,
				[inputIdentifier]: enteredValue,
				cash: SUM(cashArray),
				recurringDeposits: SUM(rdArray),
				fixedDeposits: SUM(fixedArray),
				creditCards: SUM(creditArray),
				loans: SUM(loanArray),
				currentAssets: SUM(currentAssetsArray),
				longTermAssets: SUM(longTermAssetsArray),
				currentLiabilities: SUM(currentLiabilitiesArray),
				longTermLiabilities: SUM(longTermLiabilitiesArray),
				assets: SUM(assetsArray),
				liabilities: SUM(liabilitiesArray),
			};
		});
	};

	const resetHandler = () => {
		setInputs({ ...initialState });
	};

	const updateHandler = async () => {
		try {
			await updateBalanceSheetDetails(updateId, inputs);
			dispatch(balanceSheetActions.setBalanceSheetDetails(inputs as never));
			Alert.alert('Success!', 'Data saved successfully');
			navigation.navigate('ViewBalanceSheet' as never);
		} catch (error) {
			Alert.alert('Sorry!', 'Could not save data - please try again later!');
		}
	};

	return (
		<>
			{location === 'UpdateBalanceSheet' && (
				<View style={styles.buttonContainer}>
					<Button
						onPress={resetHandler}
						icons='Ionicons'
						name='reload-circle-outline'
						size={18}
						color='black'
					>
						Reset
					</Button>
					<Button
						onPress={updateHandler}
						icons='MaterialIcons'
						name='update'
						size={18}
						color='black'
					>
						Update
					</Button>
				</View>
			)}
			<AssetsLiabilities
				label='Assets'
				value={inputs.assets}
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
						editable={false}
					/>
					<AssetLiabilitiesDetails
						label='Axis Bank'
						value={inputs.axisBank}
						location={location}
						onChangeText={inputChangedHandler.bind(this, 'axisBank')}
						editable={true}
					/>
					<AssetLiabilitiesDetails
						label='AU Bank'
						value={inputs.auBank}
						location={location}
						onChangeText={inputChangedHandler.bind(this, 'auBank')}
						editable={true}
					/>
					<AssetLiabilitiesDetails
						label='FI Bank'
						value={inputs.fiBank}
						location={location}
						onChangeText={inputChangedHandler.bind(this, 'fiBank')}
						editable={true}
					/>
					<AssetLiabilitiesDetails
						label='IDFC First Bank'
						value={inputs.idfcBank}
						location={location}
						onChangeText={inputChangedHandler.bind(this, 'idfcBank')}
						editable={true}
					/>
					<AssetLiabilitiesDetails
						label='Kotak Mahindra Bank'
						value={inputs.kotakBank}
						location={location}
						onChangeText={inputChangedHandler.bind(this, 'idfcBank')}
						editable={true}
					/>
					<AssetLiabilitiesDetails
						label='Punjab National Bank'
						value={inputs.pnbBank}
						location={location}
						onChangeText={inputChangedHandler.bind(this, 'pnbBank')}
						editable={true}
					/>
					<AssetLiabilitiesDetails
						label='State Bank of India RIMS'
						value={inputs.sbiRmccBank}
						location={location}
						onChangeText={inputChangedHandler.bind(this, 'pnbBank')}
						editable={true}
					/>
					<AssetLiabilitiesDetails
						label='State Bank of India Unitech'
						value={inputs.sbiUnitechBank}
						location={location}
						onChangeText={inputChangedHandler.bind(this, 'sbiUnitechBank')}
						editable={true}
					/>
					<AssetLiabilitiesDetails
						label='UCO Bank'
						value={inputs.ucoBank}
						location={location}
						onChangeText={inputChangedHandler.bind(this, 'ucoBank')}
						editable={true}
					/>
					<AssetLiabilitiesDetails
						label='Indian Bank'
						value={inputs.indianBank}
						location={location}
						onChangeText={inputChangedHandler.bind(this, 'indianBank')}
						editable={true}
					/>
				</View>
				<View style={styles.subHeaderContainer}>
					<AssetsLiabilitiesSubHeader
						label='Recurring Deposits'
						value={inputs.recurringDeposits}
						location={location}
						editable={false}
					/>
					<AssetLiabilitiesDetails
						label='AU Bank RD'
						value={inputs.auRD}
						location={location}
						onChangeText={inputChangedHandler.bind(this, 'auRD')}
						editable={true}
					/>
					<AssetLiabilitiesDetails
						label='FI Bank RD'
						value={inputs.fiRD}
						location={location}
						onChangeText={inputChangedHandler.bind(this, 'fiRD')}
						editable={true}
					/>
					<AssetLiabilitiesDetails
						label='IDFC First Bank RD'
						value={inputs.idfcRD}
						location={location}
						onChangeText={inputChangedHandler.bind(this, 'idfcRD')}
						editable={true}
					/>
					<AssetLiabilitiesDetails
						label='Kotak Mahindra Bank RD'
						value={inputs.kotakRD}
						location={location}
						onChangeText={inputChangedHandler.bind(this, 'kotakRD')}
						editable={true}
					/>
					<AssetLiabilitiesDetails
						label='Punjab National Bank RD'
						value={inputs.pnbRD}
						location={location}
						onChangeText={inputChangedHandler.bind(this, 'pnbRD')}
						editable={true}
					/>
					<AssetLiabilitiesDetails
						label='State Bank of India RD'
						value={inputs.sbiRD}
						location={location}
						onChangeText={inputChangedHandler.bind(this, 'sbiRD')}
						editable={true}
					/>
				</View>
				<View style={styles.subHeaderContainer}>
					<AssetsLiabilitiesSubHeader
						label='Gold ETFs'
						value={inputs.goldETF}
						location={location}
						onChangeText={inputChangedHandler.bind(this, 'goldETF')}
						editable={true}
					/>
				</View>
				<View style={styles.subHeaderContainer}>
					<AssetsLiabilitiesSubHeader
						label='Shoonya ETFs'
						value={inputs.shoonyaETF}
						location={location}
						onChangeText={inputChangedHandler.bind(this, 'shoonyaETF')}
						editable={true}
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
						editable={false}
					/>
					<AssetLiabilitiesDetails
						label='AU Bank FD'
						value={inputs.auFD}
						location={location}
						onChangeText={inputChangedHandler.bind(this, 'auFD')}
						editable={true}
					/>
				</View>
				<View style={styles.subHeaderContainer}>
					<AssetsLiabilitiesSubHeader
						label='Mutual Funds'
						value={inputs.mutualFunds}
						location={location}
						onChangeText={inputChangedHandler.bind(this, 'mutualFunds')}
						editable={true}
					/>
				</View>
				<View style={styles.subHeaderContainer}>
					<AssetsLiabilitiesSubHeader
						label='Public Provident Fund'
						value={inputs.ppf}
						location={location}
						onChangeText={inputChangedHandler.bind(this, 'ppf')}
						editable={true}
					/>
				</View>
				<View style={styles.subHeaderContainer}>
					<AssetsLiabilitiesSubHeader
						label='National Pension Scheme'
						value={inputs.nps}
						location={location}
						onChangeText={inputChangedHandler.bind(this, 'nps')}
						editable={true}
					/>
				</View>
				<View style={styles.subHeaderContainer}>
					<AssetsLiabilitiesSubHeader
						label='Floating Rate Saving Bonds'
						value={inputs.frsb}
						location={location}
						onChangeText={inputChangedHandler.bind(this, 'frsb')}
						editable={true}
					/>
				</View>
				<View style={styles.subHeaderContainer}>
					<AssetsLiabilitiesSubHeader
						label='Treasury Bills'
						value={inputs.tBills}
						location={location}
						onChangeText={inputChangedHandler.bind(this, 'tBills')}
						editable={true}
					/>
				</View>
				<View style={styles.subHeaderContainer}>
					<AssetsLiabilitiesSubHeader
						label='Sovereign Gold Bonds'
						value={inputs.sgb}
						location={location}
						onChangeText={inputChangedHandler.bind(this, 'sgb')}
						editable={true}
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
						editable={false}
					/>
					<AssetLiabilitiesDetails
						label='Citi Card'
						value={inputs.citiCard}
						location={location}
						onChangeText={inputChangedHandler.bind(this, 'citiCard')}
						editable={true}
					/>
					<AssetLiabilitiesDetails
						label='SBI Card'
						value={inputs.sbiCard}
						location={location}
						onChangeText={inputChangedHandler.bind(this, 'sbiCard')}
						editable={true}
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
						editable={false}
					/>
					<AssetLiabilitiesDetails
						label='Axis Bank Personal Loan'
						value={inputs.axisPl}
						location={location}
						onChangeText={inputChangedHandler.bind(this, 'axisPl')}
						editable={true}
					/>
					<AssetLiabilitiesDetails
						label='Mom'
						value={inputs.mom}
						location={location}
						onChangeText={inputChangedHandler.bind(this, 'mom')}
						editable={true}
					/>
					<AssetLiabilitiesDetails
						label='Citi Card Health Insurance'
						value={inputs.citiHis}
						location={location}
						onChangeText={inputChangedHandler.bind(this, 'citiHis')}
						editable={true}
					/>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginHorizontal: 20,
		marginVertical: 30,
	},
	mainDetailsContainer: {
		paddingVertical: 4,
		paddingHorizontal: 10,
	},
	subHeaderContainer: {
		marginBottom: 10,
	},
});

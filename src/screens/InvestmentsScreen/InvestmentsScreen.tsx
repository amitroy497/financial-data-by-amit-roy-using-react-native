import { Fragment, useLayoutEffect } from 'react';
import {
	Alert,
	ImageBackground,
	ScrollView,
	StyleSheet,
	View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingOverlay, Tile3, Tile4 } from '../../components';
import { Colors } from '../../constants';
import { investmentActions } from '../../store';
import { fetchInvestmentDetails } from '../../utils';

const wave = require('../../images/wave.png');

export const InvestmentsScreen = () => {
	const dispatch = useDispatch<any>();

	const { investments: investmentData } = useSelector(
		(s: any) => s.investments || {}
	);

	const totalInvestedValue =
		investmentData?.data?.length > 0 &&
		investmentData?.data
			?.reduce(
				(acc: any, currentValue: any) => acc + +currentValue.investedValue,
				0
			)
			.toFixed(2)
			.toString();

	const totalMarketValue =
		investmentData?.data?.length > 0 &&
		investmentData?.data
			?.reduce(
				(acc: any, currentValue: any) => acc + +currentValue.marketValue,
				0
			)
			.toFixed(2)
			.toString();

	useLayoutEffect(() => {
		const getMutualFund = async () => {
			try {
				// const investmentData: any = await storeInvestmentDetails(
				// 	allInvestmentsMock
				// );
				const investmentData: any = await fetchInvestmentDetails();
				dispatch(investmentActions.setInvestmentDetails(investmentData));
			} catch (error) {
				Alert.alert('Sorry!', 'Something went wrong!');
			}
		};
		getMutualFund();
	}, []);

	return (
		<View style={styles.rootContainer}>
			{investmentData?.data?.length > 0 ? (
				<ScrollView style={styles.container}>
					<Tile3
						investedValue={totalInvestedValue}
						marketValue={totalMarketValue}
					/>
					<ImageBackground
						source={wave}
						resizeMode='cover'
						style={styles.investmentContainer}
					>
						{investmentData?.data?.map((item: any) => (
							<Fragment key={item?.code}>
								<Tile4
									label={item?.label}
									investedValue={item?.investedValue}
									marketValue={item?.marketValue}
								/>
							</Fragment>
						))}
					</ImageBackground>
				</ScrollView>
			) : (
				<LoadingOverlay message='Loading ...' color={Colors.white} />
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		backgroundColor: Colors.blue700,
	},
	container: {
		marginVertical: 20,
		marginHorizontal: 15,
	},
	investmentContainer: {
		flex: 1,
		backgroundColor: Colors.white,
		paddingHorizontal: 10,
		marginVertical: 20,
		borderRadius: 15,
	},
});

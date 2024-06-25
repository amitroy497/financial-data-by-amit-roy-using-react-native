import { Fragment, useLayoutEffect } from 'react';
import {
	Alert,
	ImageBackground,
	ScrollView,
	StyleSheet,
	View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Tile3, Tile4 } from '../../components';
import { Colors } from '../../constants';
import { fetchInvestmentDetails } from '../../utils';
import { investmentActions } from '../../store';

const wave = require('../../images/wave.png');

export const InvestmentsScreen = () => {
	const dispatch = useDispatch<any>();

	const { investments: investmentData } = useSelector(
		(s: any) => s.investments || {}
	);

	useLayoutEffect(() => {
		const getMutualFund = async () => {
			try {
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
			<ScrollView style={styles.container}>
				<Tile3 investedValue='1000' marketValue='2000' />
				<ImageBackground
					source={wave}
					resizeMode='cover'
					style={styles.investmentContainer}
				>
					{investmentData.data.length > 0 && (
						<>
							{investmentData?.data?.map((item: any) => (
								<Fragment key={item?.code}>
									<Tile4
										label={item?.label}
										investedValue={item?.investedValue}
										marketValue={item?.marketValue}
									/>
								</Fragment>
							))}
						</>
					)}
				</ImageBackground>
			</ScrollView>
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

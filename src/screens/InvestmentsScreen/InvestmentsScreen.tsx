import {
	Alert,
	ImageBackground,
	ScrollView,
	StyleSheet,
	View,
} from 'react-native';
import { Tile3, Tile4 } from '../../components';
import { AllLabels, Colors } from '../../constants';
import { allInvestmentsMock, fetchInvestmentDetails } from '../../utils';
import { Fragment, useLayoutEffect } from 'react';
import { investmentActions } from '../../store';
import { useDispatch } from 'react-redux';

const wave = require('../../images/wave.png');

export const InvestmentsScreen = () => {
	const dispatch = useDispatch<any>();
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
					{allInvestmentsMock.map((item, index) => (
						<Fragment key={index}>
							<Tile4
								label={item?.label}
								investedValue={item?.investedValue}
								marketValue={item?.marketValue}
							/>
						</Fragment>
					))}
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

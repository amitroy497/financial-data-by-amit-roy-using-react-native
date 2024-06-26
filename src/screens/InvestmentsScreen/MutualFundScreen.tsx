import AsyncStorage from '@react-native-async-storage/async-storage';
import { Fragment, useLayoutEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Tile2 } from '../../components';
import { AllInvestments, Codes } from '../../constants';

export const MutualFundScreen = () => {
	const { investments: investmentData } = useSelector(
		(s: any) => s.investments || {}
	);
	const { details: mutualFundData }: any = investmentData?.data.find(
		(item: any) => {
			return item?.code === Codes.mutualFund;
		}
	);

	useLayoutEffect(() => {
		const setAsyncStorage = async () => {
			const storage = await AsyncStorage.setItem(
				'investmentType',
				Codes.mutualFund
			);
			return storage;
		};
		setAsyncStorage();
	}, []);

	return (
		<ScrollView style={styles.tilesContainer}>
			{mutualFundData?.map((item: any) =>
				AllInvestments?.map((investment: any) =>
					investment?.mutualFund?.map(
						(i: any) =>
							i?.code === item?.code && (
								<Fragment key={item?.code}>
									<Tile2
										code={item?.code}
										imageSource={i?.image}
										gradientColor={i?.gradient}
										fundLabel={item?.label}
										holdingPercentage={item?.holdingPercentage}
										investedValue={item?.investedValue}
										marketValue={item?.marketValue}
										gainLossValue={item?.gainLoss}
										gainLossPercentage={item?.gainLossPercentage}
									/>
								</Fragment>
							)
					)
				)
			)}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	tilesContainer: {
		marginVertical: 20,
		marginHorizontal: 15,
	},
});

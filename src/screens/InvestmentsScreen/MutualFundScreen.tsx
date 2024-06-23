import { Alert, StyleSheet, Text, View } from 'react-native';
import { Tile2 } from '../../components';
import { AllInvestments, Codes, Colors } from '../../constants';
import { ScrollView } from 'react-native-gesture-handler';
import { Fragment, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const MutualFundScreen = () => {
	const [mutualFundData, setMutualFundData] = useState([]);
	const { investments: investmentData } = useSelector(
		(s: any) => s.investments || {}
	);

	useLayoutEffect(() => {
		const { details }: any = investmentData?.data.find((item: any) => {
			return item?.code === Codes.mutualFund;
		});
		setMutualFundData(details!);
	}, []);

	return (
		<ScrollView style={styles.tilesContainer}>
			{mutualFundData?.map((item: any, index) =>
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
			{/* {AllInvestments.map((investment: any) =>
				investment.mutualFund.map((item: any) => (
					<Fragment key={item?.code}>
						<Tile2
							code={item?.code}
							imageSource={item?.image}
							gradientColor={item?.gradient}
							fundLabel={item?.label}
							holdingPercentage={item?.holdingPercentage}
						investedValue={item?.investedValue}
						marketValue={item?.marketValue}
						/>
					</Fragment>
				))
			)} */}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	tilesContainer: {
		marginVertical: 20,
		marginHorizontal: 15,
	},
});

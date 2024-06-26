import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Fragment, useLayoutEffect, useState } from 'react';
import { Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import {
	AllInvestments,
	AllNavigationName,
	AsyncStorageName,
	Codes,
} from '../../constants';
import { investmentActions } from '../../store';
import {
	PERCENTAGE,
	SUBTRACT,
	timeout,
	updateInvestmentDetails,
} from '../../utils';
import { Tile5, Tile6, UpdateResetButtons } from '../UI';

export const MutualFunds = ({ location }: { location: string }) => {
	const dispatch = useDispatch();

	const navigation = useNavigation();

	const [mutualFundData, setMutualFundData] = useState<any>([]);
	const [investmentCode, setInvestmentCode] = useState<string>('');
	const [reset, setReset] = useState<boolean>(false);

	const { investments: investmentData } = useSelector(
		(s: any) => s.investments || {}
	);

	const { details: investmentDetails }: any = investmentData?.data.find(
		(item: any) => {
			return item?.code === Codes.mutualFund;
		}
	);

	const isUpdate =
		location === AllNavigationName.updateInvestments ? true : false;

	useLayoutEffect(() => {
		const getInvestmentCode = async () => {
			const invCode: string = (await AsyncStorage.getItem(
				AsyncStorageName.investmentCode
			)) as string;
			setInvestmentCode(invCode);
			const currentMfData = investmentDetails?.find((item: any) => {
				return item?.code === invCode;
			});
			setMutualFundData(currentMfData);
		};
		getInvestmentCode();
	}, [investmentDetails]);

	const getData = (val: any) => {
		const data: any = mutualFundData?.details?.map((item: any) => {
			return val?.code === item?.code ? { ...item, ...val } : item;
		});

		const newInvestedValue = data
			?.reduce(
				(acc: any, currentValue: any) => acc + +currentValue.investedValue,
				0
			)
			.toFixed(2)
			.toString();

		const newMarketValue = data
			?.reduce(
				(acc: any, currentValue: any) => acc + +currentValue.marketValue,
				0
			)
			.toFixed(2)
			.toString();

		const newGainLossValue = SUBTRACT([+newInvestedValue, +newMarketValue]);

		const newData = {
			...mutualFundData,
			details: [...data],
			investedValue: newInvestedValue,
			marketValue: newMarketValue,
			gainLoss: newGainLossValue,
			gainLossPercentage: PERCENTAGE(newGainLossValue, newInvestedValue),
		};
		setMutualFundData(newData);
	};

	const resetHandler = async () => {
		setReset(true);
		await timeout(1000);
		setReset(false);
	};

	const updateHandler = async () => {
		const updateData = investmentData?.data?.map((item1: any) => {
			if (item1?.code === Codes.mutualFund) {
				return {
					...item1,
					details: item1?.details?.map((item2: any) => {
						if (item2?.code === investmentCode) {
							return { ...item2, ...mutualFundData };
						}
						return { ...item2 };
					}),
				};
			}
			return { ...item1 };
		});

		const updatedMf = updateData?.find(
			(item: any) => item?.code === Codes.mutualFund
		);
		const newMfInvestedValue = updatedMf?.details
			?.reduce(
				(acc: any, currentValue: any) => acc + +currentValue.investedValue,
				0
			)
			.toFixed(2)
			.toString();

		const newMfMarketValue = updatedMf?.details
			?.reduce(
				(acc: any, currentValue: any) => acc + +currentValue.marketValue,
				0
			)
			.toFixed(2)
			.toString();

		const newMfGainLossValue = SUBTRACT([
			+newMfInvestedValue,
			+newMfMarketValue,
		]);

		const newUpdatedData = updateData?.map((item: any) => {
			if (item?.code === Codes.mutualFund) {
				return {
					...item,
					investedValue: newMfInvestedValue,
					marketValue: newMfMarketValue,
					gainLoss: newMfGainLossValue,
					gainLossPercentage: PERCENTAGE(
						newMfGainLossValue,
						newMfInvestedValue
					),
				};
			}
			return { ...item };
		});
		const id = investmentData?.id;
		const finalData: any = { id, data: newUpdatedData };

		try {
			dispatch(investmentActions.setInvestmentDetails(finalData));
			await updateInvestmentDetails(id, newUpdatedData);
			Alert.alert('Success!', 'Data saved successfully', [
				{
					text: 'OK',
					onPress: () =>
						navigation.navigate(AllNavigationName.mutualFunds as never),
				},
			]);
		} catch (error) {
			Alert.alert('Sorry!', 'Could not save data - please try again later!');
		}
	};

	return (
		<ScrollView>
			{AllInvestments?.map((investment: any) =>
				investment?.mutualFund?.map(
					(item: any) =>
						item?.code === mutualFundData?.code && (
							<Fragment key={item?.code}>
								<Tile5
									type={Codes.mutualFund}
									label={mutualFundData?.label}
									investedValue={mutualFundData?.investedValue}
									marketValue={mutualFundData?.marketValue}
									gainLossValue={mutualFundData?.gainLoss}
									gainLossPercentage={mutualFundData?.gainLossPercentage}
									imageSource={item?.image}
								/>
							</Fragment>
						)
				)
			)}
			<UpdateResetButtons
				isVisible={isUpdate}
				resetHandler={resetHandler}
				updateHandler={updateHandler}
			/>
			{mutualFundData?.details?.map((item: any) => (
				<Fragment key={item?.code}>
					<Tile6
						code={item?.code}
						label={item?.label}
						investedValue={item?.investedValue}
						marketValue={item?.marketValue}
						gainLossValue={item?.gainLoss}
						gainLossPercentage={item?.gainLossPercentage}
						nav={item?.nav}
						units={item?.units}
						isUpdate={isUpdate}
						setData={getData}
						reset={reset}
					/>
				</Fragment>
			))}
		</ScrollView>
	);
};

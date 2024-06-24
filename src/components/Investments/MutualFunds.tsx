import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Tile5, Tile6 } from '../UI';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import {
	Fragment,
	useCallback,
	useEffect,
	useLayoutEffect,
	useState,
} from 'react';
import { AllInvestments, AllNavigationName, Codes } from '../../constants';
import { StyleSheet, View } from 'react-native';
import { timeout } from '../../utils';

export const MutualFunds = ({ location }: { location: string }) => {
	const [mutualFundData, setMutualFundData] = useState<any>([]);
	const [investmentCode, setInvestmentCode] = useState<string>('');
	const [reset, setReset] = useState<boolean>(false);

	const { investments: investmentData } = useSelector(
		(s: any) => s.investments || {}
	);

	const isUpdate =
		location === AllNavigationName.updateInvestments ? true : false;

	useLayoutEffect(() => {
		const { details }: any = investmentData?.data.find((item: any) => {
			return item?.code === Codes.mutualFund;
		});

		// console.log('details', details);

		const getInvestmentCode = async () => {
			const invCode: string = (await AsyncStorage.getItem(
				'investmentCode'
			)) as string;
			setInvestmentCode(invCode);
			const currentMfData = details?.find((item: any) => {
				return item?.code === invCode;
			});
			setMutualFundData(currentMfData);
		};
		getInvestmentCode();
	}, []);

	const getData = (val: any) => {
		// console.log('Mahadev', val);
		// console.log('mutualFundData', mutualFundData);
		const data = mutualFundData?.details?.map((item: any) => {
			return val?.code === item?.code ? { ...item, ...val } : item;
		});
		const newData = { ...mutualFundData, details: [...data] };
		setMutualFundData(newData);
	};

	const resetHandler = async () => {
		setReset(true);
		await timeout(1000);
		setReset(false);
	};

	const updateHandler = () => {
		console.log('investmentData', investmentData);
		console.log('mutualFundData', mutualFundData);
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
		const id = investmentData?.id;
		const finalData = { id, updateData };
		console.log('finalData', finalData);
	};

	return (
		<ScrollView>
			{AllInvestments?.map((investment: any) =>
				investment?.mutualFund?.map(
					(item: any) =>
						item?.code === mutualFundData?.code && (
							<Fragment key={item?.code}>
								<Tile5
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
			{isUpdate && (
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

const styles = StyleSheet.create({
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginHorizontal: 20,
		marginVertical: 30,
	},
});

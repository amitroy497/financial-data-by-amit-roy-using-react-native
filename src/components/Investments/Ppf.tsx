import AsyncStorage from '@react-native-async-storage/async-storage';
import { Fragment, useLayoutEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import {
	AllNavigationName,
	AsyncStorageName,
	Codes,
	Resources,
} from '../../constants';
import { timeout } from '../../utils';
import { Tile5, Tile8, Tile9, UpdateResetButtons } from '../UI';

export const Ppf = ({ location }: { location: string }) => {
	const [ppfData, setPpfData] = useState<any>([]);
	const [investmentCode, setInvestmentCode] = useState<string>('');
	const [reset, setReset] = useState<boolean>(false);

	const { investments: investmentData } = useSelector(
		(s: any) => s.investments || {}
	);

	const { details: investmentDetails }: any = investmentData?.data.find(
		(item: any) => {
			return item?.code === Codes.publicProvidentFund;
		}
	);

	useLayoutEffect(() => {
		const getInvestmentCode = async () => {
			const invCode: string = (await AsyncStorage.getItem(
				AsyncStorageName.investmentCode
			)) as string;
			setInvestmentCode(invCode);
			const currentMfData = investmentDetails?.find((item: any) => {
				return item?.code === invCode;
			});
			setPpfData(currentMfData);
		};
		getInvestmentCode();
	}, [investmentDetails]);

	const isUpdate =
		location === AllNavigationName.updateInvestments ? true : false;

	const resetHandler = async () => {
		setReset(true);
		await timeout(1000);
		setReset(false);
	};

	const updateHandler = () => {};

	const getData = (val: any) => {};

	return (
		<ScrollView>
			{Resources?.map((investment: any) =>
				investment?.ppf?.map(
					(item: any) =>
						item?.code === ppfData?.code && (
							<Fragment key={item?.code}>
								<Tile5
									type={Codes.publicProvidentFund}
									label={ppfData?.label}
									investedValue={ppfData?.principalAmount}
									marketValue={ppfData?.totalAmount}
									gainLossValue={ppfData?.interest}
									gainLossPercentage={ppfData?.growthPercentage}
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
			<Tile9>
				{ppfData?.details?.map((item: any, index: number) => (
					<Fragment key={index}>
						<Tile8
							date={item?.date}
							principalAmount={item?.principalAmount}
							totalAmount={item?.totalAmount}
							isUpdate={isUpdate}
							setData={getData}
							reset={reset}
						/>
					</Fragment>
				))}
			</Tile9>
		</ScrollView>
	);
};

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Fragment, useLayoutEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import {
	AllInvestments,
	AllNavigationName,
	AsyncStorageName,
	Codes,
} from '../../constants';
import { Tile5 } from '../UI';

export const Ppf = ({ location }: { location: string }) => {
	const [ppfData, setPpfData] = useState<any>([]);
	const [investmentCode, setInvestmentCode] = useState<string>('');

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

	return (
		<ScrollView>
			{AllInvestments?.map((investment: any) =>
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
		</ScrollView>
	);
};

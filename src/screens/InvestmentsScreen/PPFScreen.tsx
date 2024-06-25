import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import { Codes } from '../../constants';

export const PPFScreen = () => {
	const { investments: investmentData } = useSelector(
		(s: any) => s.investments || {}
	);
	const { details: ppfData }: any = investmentData?.data.find((item: any) => {
		return item?.code === Codes.publicProvidentFund;
	});

	return <Text>PPFScreen</Text>;
};

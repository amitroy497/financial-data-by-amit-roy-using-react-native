import AsyncStorage from '@react-native-async-storage/async-storage';
import { Tile5 } from '../UI';

const NIMFImage = require('../../images/Nippon.png');

export const MutualFunds = () => {
	const getCode = async () => {
		const code = await AsyncStorage.getItem('investmentCode');
		return code;
	};

	return (
		<>
			<Tile5
				label='Nippon India Mutual Fund'
				investedValue='50000.00'
				marketValue='70000.00'
				gainLossValue='2000.00'
				gainLossPercentage='100.00%'
				imageSource={NIMFImage}
			/>
		</>
	);
};

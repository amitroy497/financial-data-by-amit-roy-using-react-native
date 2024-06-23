import { StyleSheet, Text, View } from 'react-native';
import { Tile2 } from '../../components';
import { Colors } from '../../constants';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useLayoutEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';

export const ViewInvestments = () => {
	const [investmentCode, setInvestmentCode] = useState<string>('');
	// const { mutualFund: mutualFundData } = useSelector<any>(
	// 	(s: any) => s.mutualFund
	// );

	// useLayoutEffect(() => {
	// 	const getInvestmentCode = async () => {
	// 		const code = (await AsyncStorage.getItem('investmentCode')) as string;
	// 		setInvestmentCode(code);
	// 	};

	// 	getInvestmentCode();
	// }, []);

	return (
		<ScrollView style={styles.tilesContainer}>
			{/* <Tile2
				imageSource={NIMFImage}
				gradientColor={Colors.gradient1}
				fundLabel='Nippon India Mutual Fund'
				holdingPercentage='24'
				investedValue='900.23'
				marketValue='1000.67'
			/> */}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	tilesContainer: {
		marginVertical: 20,
		marginHorizontal: 15,
	},
});

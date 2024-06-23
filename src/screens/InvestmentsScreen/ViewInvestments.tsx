import { StyleSheet, Text, View } from 'react-native';
import { MutualFunds, Tile2 } from '../../components';
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

	return <MutualFunds />;
};

const styles = StyleSheet.create({
	tilesContainer: {
		marginVertical: 20,
		marginHorizontal: 15,
	},
});

import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useLayoutEffect, useState } from 'react';
import { AsyncStorageName, Codes, Colors } from '../../constants';
import { LoadingOverlay } from '../UI';
import { MutualFunds } from './MutualFunds';
import { Ppf } from './Ppf';

export const CommonViewUpdate = ({ location }: { location: string }) => {
	const [type, setType] = useState<string>('');

	useLayoutEffect(() => {
		const getInvestmentType = async () => {
			const investmentType = (await AsyncStorage.getItem(
				AsyncStorageName.investmentType
			)) as string;
			setType(investmentType);
		};
		getInvestmentType();
	}, []);

	return (
		<>
			{type === Codes.mutualFund ? (
				<MutualFunds location={location} />
			) : type === Codes.publicProvidentFund ? (
				<Ppf location={location} />
			) : (
				<LoadingOverlay message='Loading...' color={Colors.blue400} />
			)}
		</>
	);
};

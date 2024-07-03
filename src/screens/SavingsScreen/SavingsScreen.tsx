import { useLayoutEffect } from 'react';
import { Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { savingsActions } from '../../store';
import { fetchSavingsDetails } from '../../utils';

export const SavingsScreen = () => {
	const dispatch = useDispatch<any>();

	useLayoutEffect(() => {
		const getSavingsData = async () => {
			try {
				const savingsData: any = await fetchSavingsDetails();
				dispatch(savingsActions.setSavingsDetails(savingsData));
			} catch (err) {
				console.log(err);
				throw new Error('Failed to store savings data');
			}
		};
		getSavingsData();
	}, []);

	return <Text>SavingsScreen</Text>;
};

import { LinearGradient } from 'expo-linear-gradient';
import { useLayoutEffect } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AllLabels, AllNavigationName, Colors } from '../../constants';
import { ScreenTypes } from '../../constants/types';
import { savingsActions } from '../../store';
import { fetchSavingsDetails } from '../../utils';

export const SavingsScreen = ({ navigation }: ScreenTypes) => {
	const dispatch = useDispatch<any>();

	const { savings: savingsData } = useSelector((s: any) => s.savings || {});

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

	const onPressHandler = (code: string, details: any) => {
		navigation.navigate(AllNavigationName.monthlySavings, { code, details });
	};

	return (
		<ScrollView>
			{savingsData?.data?.length > 0 &&
				savingsData?.data?.map((item: any) => (
					<Pressable
						onPress={() => onPressHandler(item?.code, item?.details)}
						key={item?.code}
						style={styles.container}
					>
						<LinearGradient colors={Colors.gradient11} style={styles.gradient}>
							<Text style={styles.headerText}>{item?.label}</Text>
							<View style={styles.amountContainer}>
								<Text style={styles.amountLabel}>
									{AllLabels?.totalSavings}
								</Text>
								<Text style={styles.amountText}>₹{item?.totalSavings}</Text>
							</View>
						</LinearGradient>
					</Pressable>
				))}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		marginVertical: 20,
		marginHorizontal: 20,
		overflow: 'hidden',
		borderRadius: 15,
	},
	gradient: {
		paddingVertical: 20,
		paddingHorizontal: 30,
	},
	headerText: {
		color: Colors.white,
		fontWeight: 'bold',
		fontSize: 24,
	},
	amountContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 15,
	},
	amountLabel: {
		color: Colors.grey400,
		fontSize: 18,
		fontWeight: 'bold',
	},
	amountText: {
		color: Colors.grey400,
		fontSize: 18,
	},
});

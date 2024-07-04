import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLayoutEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Tile7 } from '../../components';
import { Codes, Resources } from '../../constants';

export const PPFScreen = () => {
	const { investments: investmentData } = useSelector(
		(s: any) => s.investments || {}
	);
	const { details: ppfData }: any = investmentData?.data.find((item: any) => {
		return item?.code === Codes.publicProvidentFund;
	});

	useLayoutEffect(() => {
		const setAsyncStorage = async () => {
			const storage = await AsyncStorage.setItem(
				'investmentType',
				Codes.publicProvidentFund
			);
			return storage;
		};
		setAsyncStorage();
	}, []);

	return (
		<ScrollView style={styles.tilesContainer}>
			{ppfData?.length > 0 &&
				ppfData?.map((item: any) =>
					Resources?.map((investment: any) =>
						investment?.ppf?.map(
							(i: any) =>
								i?.code === item?.code && (
									<View style={styles.rootContainer} key={item?.code}>
										<Tile7 defaultValue={item} gradientColor={i?.gradient} />
									</View>
								)
						)
					)
				)}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	tilesContainer: {
		marginVertical: 20,
		marginHorizontal: 15,
	},
	rootContainer: {
		marginVertical: 20,
		overflow: 'hidden',
		borderRadius: 15,
	},
});

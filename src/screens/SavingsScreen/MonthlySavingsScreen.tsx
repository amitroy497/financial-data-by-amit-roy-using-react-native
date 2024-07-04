import React, { Fragment } from 'react';
import { ScrollView } from 'react-native';
import { Tile10 } from '../../components';
import { AllLabels, AllNavigationName, Resources } from '../../constants';
import { ScreenTypes } from '../../constants/types';

export const MonthlySavingsScreen = ({ route, navigation }: ScreenTypes) => {
	const monthlySavings = route?.params?.details;

	const onPressHandler = (code: string, details: any) => {
		navigation.navigate(AllNavigationName.monthlySavingsDetails, {
			code,
			details,
		});
	};

	return (
		<ScrollView>
			{Resources?.map((res: any) =>
				res.savingsMonth?.map((month: any) =>
					monthlySavings?.map(
						(item: any) =>
							item?.code === month?.code && (
								<Fragment key={item?.code}>
									<Tile10
										header={item?.label}
										label={AllLabels.totalSavings}
										amount={item?.totalSavings}
										gradient={month?.gradient}
										onPress={() => onPressHandler(item?.code, item?.details)}
									/>
								</Fragment>
							)
					)
				)
			)}
		</ScrollView>
	);
};

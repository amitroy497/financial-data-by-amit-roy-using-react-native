import { ScrollView, Text, View } from 'react-native';

export const BalanceSheetForm = () => {
	return (
		<ScrollView>
			<View>
				<View>
					<Text>Assets</Text>
				</View>
			</View>
			<View>
				<View>
					<Text>Liabilities</Text>
				</View>
			</View>
		</ScrollView>
	);
};

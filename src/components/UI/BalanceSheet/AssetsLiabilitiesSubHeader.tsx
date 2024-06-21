import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from '../../../constants';
import { AssetsLiabilitiesTypes } from '../../../constants/types';
import { stringToNumberToString } from '../../../utils';

export const AssetsLiabilitiesSubHeader = ({
	label,
	location,
	value,
	editable,
	onChangeText,
}: AssetsLiabilitiesTypes) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{label}</Text>
			{editable && location === 'UpdateBalanceSheet' ? (
				<TextInput
					style={styles.input}
					placeholder='0.00'
					keyboardType='decimal-pad'
					autoComplete='off'
					autoCorrect={false}
					onChangeText={onChangeText}
					editable={editable}
					value={value}
					onEndEditing={(e: any) =>
						onChangeText(stringToNumberToString(e?.nativeEvent?.text))
					}
				/>
			) : (
				<Text>₹{value}</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 10,
		marginBottom: 15,
	},
	text: {
		fontWeight: 'bold',
		color: Colors.violet700,
	},
	input: {
		borderWidth: 1,
		borderColor: Colors.grey400,
		padding: 2,
		width: 80,
		textAlign: 'right',
	},
});

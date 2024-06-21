import { StyleSheet, Text, TextInput, View } from 'react-native';
import { AssetsLiabilitiesTypes } from '../../../constants/types';
import { stringToNumberToString } from '../../../utils';
import { Colors } from '../../../constants';

export const AssetLiabilitiesDetails = ({
	label,
	location,
	editable,
	onChangeText,
	value,
}: AssetsLiabilitiesTypes) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{label}</Text>
			{location === 'ViewBalanceSheet' ? (
				<Text>₹{value}</Text>
			) : (
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
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: 4,
	},
	text: {
		fontWeight: 'bold',
	},
	input: {
		borderWidth: 1,
		borderColor: Colors.grey400,
		padding: 2,
		width: 80,
		textAlign: 'right',
	},
});

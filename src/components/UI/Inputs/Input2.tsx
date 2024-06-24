import { TextInput } from 'react-native';
import { stringToNumberToString } from '../../../utils';
import { Input2Types } from '../../../constants/types';

export const Input2 = ({ style, onChangeText, value }: Input2Types) => {
	return (
		<TextInput
			style={style}
			placeholder='0.00'
			keyboardType='decimal-pad'
			autoComplete='off'
			autoCorrect={false}
			onChangeText={onChangeText}
			editable={true}
			value={value}
			onEndEditing={(e: any) =>
				onChangeText(stringToNumberToString(e?.nativeEvent?.text))
			}
		/>
	);
};

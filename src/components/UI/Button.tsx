import { Pressable, Text, View } from 'react-native';
import { ButtonTypes } from '../../constants/types';

export const Button = ({ children, onPress }: ButtonTypes) => {
	return (
		<Pressable onPress={onPress}>
			<View>
				<Text>{children}</Text>
			</View>
		</Pressable>
	);
};

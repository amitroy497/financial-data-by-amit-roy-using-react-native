import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet } from 'react-native';
import { IconButtonType } from '../../constants/types';

export const IconButton = ({ icon, color, size, onPress }: IconButtonType) => {
	return (
		<Pressable
			style={({ pressed }) => [styles.button, pressed && styles.pressed]}
			onPress={onPress}
		>
			<Ionicons name={icon} color={color} size={size} />
		</Pressable>
	);
};

const styles = StyleSheet.create({
	button: {
		margin: 8,
		borderRadius: 20,
	},
	pressed: {
		opacity: 0.7,
	},
});

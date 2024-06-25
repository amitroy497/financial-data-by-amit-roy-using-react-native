import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ButtonTypes } from '../../constants/types';

export const Button = ({
	children,
	onPress,
	icons,
	name,
	color,
	size,
}: ButtonTypes) => {
	return (
		<Pressable style={styles.container} onPress={onPress}>
			<View>
				{icons && icons == 'Ionicons' ? (
					<Ionicons name={name} size={size} color={color} style={styles.icon} />
				) : (
					<MaterialIcons
						name={name}
						size={size}
						color={color}
						style={styles.icon}
					/>
				)}
			</View>
			<Text style={styles.text}>{children}</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10,
		borderRadius: 10,
		backgroundColor: '#fff',
		margin: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	icon: {
		marginRight: 6,
	},
	text: {
		fontWeight: 'bold',
	},
});

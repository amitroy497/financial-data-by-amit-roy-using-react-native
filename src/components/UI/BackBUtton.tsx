import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Colors } from '../../constants';

export const BackButton = () => {
	const navigation = useNavigation<any>();

	const onPressHandler = () => {
		navigation.goBack();
	};

	return (
		<View style={styles.pressableContainer}>
			<Pressable
				android_ripple={{ color: Colors.white }}
				onPress={onPressHandler}
			>
				<AntDesign name='left' size={20} color={Colors.white} />
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	pressableContainer: {
		width: 20,
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 10,
	},
});

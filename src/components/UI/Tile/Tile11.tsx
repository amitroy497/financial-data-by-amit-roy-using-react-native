import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ImageBackground, Pressable, StyleSheet, View } from 'react-native';
import { Colors } from '../../../constants';

const backgroundImage = require('../../../images/db-portfolio-head.png');

export const Tile11 = () => {
	return (
		<LinearGradient colors={Colors.gradient3} style={styles.container}>
			<ImageBackground
				source={backgroundImage}
				resizeMode='cover'
				style={styles.imageBackground}
			>
				<View style={styles.pressableContainer}>
					<Pressable
						android_ripple={{ color: Colors.white }}
						// onPress={onPressHandler}
					>
						<AntDesign name='left' size={20} color={Colors.white} />
					</Pressable>
				</View>
			</ImageBackground>
		</LinearGradient>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 6,
	},
	imageBackground: {
		flexDirection: 'row',
	},
	pressableContainer: {
		width: 20,
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 10,
	},
});

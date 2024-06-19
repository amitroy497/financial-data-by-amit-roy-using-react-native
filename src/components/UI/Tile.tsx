import { ImageBackground, StyleSheet, View } from 'react-native';
import { TileTypes } from '../../constants/types';

export const Tile = ({ children, image }: TileTypes) => {
	return (
		<ImageBackground
			source={image}
			resizeMode='cover'
			style={styles.imageTitle}
		>
			<View style={styles.childrenContainer}>{children}</View>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	imageTitle: {
		marginHorizontal: 40,
		marginVertical: 20,
		borderRadius: 8,
		overflow: 'hidden',
	},
	childrenContainer: {
		padding: 16,
	},
});

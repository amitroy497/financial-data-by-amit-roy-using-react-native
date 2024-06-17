import { Image, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants';

export const Logo = () => {
	const Logo = require('../../images/logo.png');

	return (
		<View style={styles.container}>
			<Image source={Logo} style={styles.image} />
			<View style={styles.textContainer}>
				<Text style={styles.text}>Finance</Text>
				<Text style={styles.text}>Central</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 60,
		marginBottom: 40,
	},
	image: {
		width: 40,
		height: 40,
	},
	textContainer: {
		marginLeft: 2,
	},
	text: {
		color: Colors.white,
		fontWeight: 'bold',
		fontSize: 20,
	},
});

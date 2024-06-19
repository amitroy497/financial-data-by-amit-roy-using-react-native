import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Tile } from '../UI';
import { Colors } from '../../constants';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const WelcomeImage = require('../../images/db-welcome.png');

export const WelcomeTile = () => {
	const navigation = useNavigation();

	return (
		<Tile image={WelcomeImage}>
			<View style={styles.container}>
				<Text style={[styles.welcomeText, styles.welcomeHeaderText]}>
					Welcome,
				</Text>
				<Text style={styles.welcomeText}>Amit Roy</Text>
			</View>
			<View style={styles.explore}>
				<Text style={styles.grayText}>
					Explore our exiciting range of services
				</Text>
			</View>
			<Pressable
				onPress={() => navigation.navigate('Balancesheet' as never)}
				android_ripple={{ color: Colors.white }}
				style={styles.renderBalanceSheet}
			>
				<MaterialCommunityIcons
					name='scale-balance'
					color={Colors.yellow700}
					size={14}
				/>
				<Text style={styles.grayText}>Click to view the Balance Sheet</Text>
				<AntDesign name='right' size={14} color={Colors.grey400} />
			</Pressable>
		</Tile>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
	},
	welcomeText: {
		color: Colors.white,
		fontSize: 20,
	},
	welcomeHeaderText: {
		fontWeight: 'bold',
		marginRight: 6,
	},
	grayText: {
		color: Colors.grey400,
	},
	explore: {
		marginTop: 8,
	},
	renderBalanceSheet: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 8,
		backgroundColor: Colors.hsl,
		borderRadius: 8,
		marginTop: 20,
	},
});

import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Tile } from '../UI';
import { Colors } from '../../constants';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import {
	balanceSheetMock,
	fetchBalanceSheetDetails,
	storeBalanceSheetDetails,
} from '../../utils';
import { useDispatch } from 'react-redux';
import { balanceSheetActions } from '../../store';

const WelcomeImage = require('../../images/db-welcome.png');

export const WelcomeTile = () => {
	const navigation = useNavigation();

	const dispatch = useDispatch();

	const handlePress = async () => {
		// const id = await storeBalanceSheetDetails(balanceSheetMock);
		// console.log('Mahadev', id);

		const balanceSheetData = await fetchBalanceSheetDetails();
		dispatch(
			balanceSheetActions.setBalanceSheetDetails(balanceSheetData as never)
		);
		// console.log('Mahadev', balanceSheetData);
		navigation.navigate('Balancesheet' as never);
	};

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
				onPress={handlePress}
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

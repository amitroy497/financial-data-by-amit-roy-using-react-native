import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import {
	Image,
	ImageBackground,
	Pressable,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { AllNavigationName, Colors } from '../../../constants';
import { Tile5Types } from '../../../constants/types';

const NIMFImage = require('../../../images/Nippon.png');
const backgroundImage = require('../../../images/db-portfolio-head.png');

export const Tile5 = ({
	label,
	investedValue,
	marketValue,
	gainLossValue,
	gainLossPercentage,
	imageSource,
}: Tile5Types) => {
	const navigation = useNavigation<any>();
	const onPressHandler = () => {
		navigation.navigate(AllNavigationName.mutualFunds);
	};
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
						onPress={onPressHandler}
					>
						<AntDesign name='left' size={20} color={Colors.white} />
					</Pressable>
				</View>
				<View>
					<View style={styles.header}>
						<View style={styles.imageContainer}>
							<Image source={imageSource} style={styles.image} />
						</View>
						<Text style={styles.headerText}>{label}</Text>
					</View>
					<View style={styles.detailsContainer}>
						<View style={styles.labelContainer}>
							<Text style={styles.labelText}>Invested Value</Text>
							<Text style={styles.labelText}>Market Value</Text>
							<Text style={styles.labelText}>Gain/Loss</Text>
						</View>
						<View style={styles.amountContainer}>
							<View style={styles.amountSubContainer}>
								<Text style={styles.amountText}>₹{investedValue}</Text>
								<View style={styles.gainLossContainer}></View>
							</View>
							<View style={styles.amountSubContainer}>
								<Text style={styles.amountText}>₹{marketValue}</Text>
								<View style={styles.gainLossContainer}></View>
							</View>
							<View style={styles.amountSubContainer}>
								<Text style={styles.amountText}>₹{gainLossValue}</Text>
								<View style={styles.gainLossContainer}>
									<View style={styles.iconContainer}>
										<AntDesign
											name={+gainLossValue > 0 ? 'caretup' : 'caretdown'}
											size={18}
											color={+gainLossValue > 0 ? Colors.lime : Colors.red400}
										/>
									</View>
									<Text style={styles.gainLossPercentageText}>
										{gainLossPercentage}
									</Text>
								</View>
							</View>
						</View>
					</View>
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
	header: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	imageContainer: {
		width: 60,
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.white,
		borderRadius: 15,
		padding: 6,
		marginRight: 8,
	},
	image: {
		width: 40,
		height: 40,
		resizeMode: 'contain',
	},
	headerText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: Colors.white,
	},
	detailsContainer: {
		flexDirection: 'row',
		marginTop: 10,
		alignItems: 'center',
	},
	labelContainer: {
		marginRight: 2,
	},
	labelText: {
		color: Colors.white,
		marginVertical: 8,
	},
	amountContainer: {
		alignItems: 'center',
		// marginTop: 4,
	},
	amountSubContainer: {
		marginVertical: 8,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	amountText: {
		color: Colors.white,
		width: 100,
		textAlign: 'right',
		fontWeight: 'bold',
		fontSize: 16,
	},
	gainLossContainer: {
		flexDirection: 'row',
		width: 70,
		marginLeft: 15,
	},
	iconContainer: {
		marginRight: 6,
		marginTop: 2,
	},
	gainLossPercentageText: {
		color: Colors.white,
	},
});

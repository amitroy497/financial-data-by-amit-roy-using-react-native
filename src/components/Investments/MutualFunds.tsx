import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLayoutEffect } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants';
import { LinearGradient } from 'expo-linear-gradient';

const NIMFImage = require('../../images/Nippon.png');
const backgroundImage = require('../../images/db-portfolio-head.png');

export const MutualFunds = () => {
	const getCode = async () => {
		const code = await AsyncStorage.getItem('investmentCode');
		return code;
	};

	return (
		<View>
			<LinearGradient colors={Colors.gradient3} style={styles.container}>
				<ImageBackground
					source={backgroundImage}
					resizeMode='cover'
					style={styles.imageBackground}
				>
					<View>
						<AntDesign name='left' size={24} color={Colors.white} />
					</View>
					<View>
						<View>
							<View>
								<Image source={NIMFImage} />
							</View>
							<View>
								<Text>Nippon India Mutual Fund</Text>
							</View>
						</View>
						<View>
							<View>
								<Text>Invested Value</Text>
								<Text>Market Value</Text>
								<Text>Gain/Loss</Text>
							</View>
							<View>
								<Text>₹50000.00</Text>
								<Text>₹50000.00</Text>
								<Text>₹50000.00</Text>
							</View>
							<View>
								<Text></Text>
								<Text></Text>
								<View>
									<AntDesign name='caretup' size={24} color='black' />
									<Text>3%</Text>
								</View>
							</View>
						</View>
					</View>
				</ImageBackground>
			</LinearGradient>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
	imageBackground: {},
});

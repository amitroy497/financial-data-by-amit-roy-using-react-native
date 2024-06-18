import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Colors } from '../constants';
import { Button, Input, LoadingOverlay, Logo } from '../components';
import { useNavigation } from '@react-navigation/native';
import { useContext, useEffect, useState } from 'react';
import { ErrorOverlay } from '../components/UI/ErrorOverlay';
import { AuthContext } from '../store';
import { fetchLoginDetails, storeLoginDetails } from '../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const MpinScreen = () => {
	const navigation = useNavigation();

	const authCtx = useContext(AuthContext);

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState<string>('');
	const [enteredPin, setEnteredPin] = useState<string>('');
	const [loginMpin, setLoginMpin] = useState<string>('');
	const [present, setPresent] = useState<boolean>(false);

	useEffect(() => {
		const fetchMpinDetails = async () => {
			const allLogins = await fetchLoginDetails();
			const storageId: string = (await AsyncStorage.getItem('id')) || '';
			if (storageId && storageId?.length > 0) {
				const loginDetails: any =
					allLogins?.find((log) => log?.loginid === storageId) || [];
				setLoginMpin(loginDetails?.mpin);
			}
		};

		fetchMpinDetails();
	}, []);

	const submitHandler = async () => {
		setIsSubmitting(true);
		if (authCtx.time === 'subsequent') {
			if (loginMpin === enteredPin) {
				navigation.navigate('Drawer' as never);
			} else {
				setIsSubmitting(false);
				setError('Wrong mpin - please try again later!');
			}
		} else {
			try {
				if (enteredPin?.length !== 0) {
					const loginDetails = {
						mpin: enteredPin,
						loginid: authCtx.id,
					};
					await storeLoginDetails(loginDetails);
					navigation.navigate('Drawer' as never);
				}
			} catch (error) {
				setError('Could not save data - please try again later!');
				setIsSubmitting(false);
			}
		}
	};

	const errorHandler = () => {
		setError('');
	};

	const updateInputValueHandler = (inputType: any, enteredValue: string) => {
		switch (inputType) {
			case 'mpin':
				setEnteredPin(enteredValue);
				break;
		}
	};

	if (error?.length !== 0 && !isSubmitting) {
		return <ErrorOverlay message={error} onConfirm={errorHandler} />;
	}
	if (isSubmitting) {
		return <LoadingOverlay message='Logging you in...' />;
	}

	return (
		<LinearGradient
			colors={[Colors.pink700, Colors.blue500]}
			style={styles.container}
		>
			<Logo />
			<ScrollView style={styles.form}>
				<View style={styles.inputContainer}>
					<Input
						placeholder='Enter your pin'
						onUpdateValue={updateInputValueHandler.bind(this, 'mpin')}
						keyboardType='number-pad'
						value={enteredPin}
					/>
				</View>
				<View style={styles.buttons}>
					<Button onPress={submitHandler}>
						{loginMpin?.length !== 0 ? 'Log in' : 'Sign up'}
					</Button>
				</View>
			</ScrollView>
		</LinearGradient>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	form: {
		flex: 1,
		backgroundColor: Colors.grey200,
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
	},
	inputContainer: {
		marginTop: 8,
		alignItems: 'center',
	},
	buttons: {
		alignItems: 'center',
		marginTop: 8,
	},
});

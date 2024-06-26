import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import { AllNavigationName, Colors } from '../../constants';
import {
	AuthContentTypes,
	CredentialBooleanType,
	CredentialType,
} from '../../constants/types';
import { FlatButton, Logo } from '../UI';
import { AuthForm } from './AuthForm';

export const AuthContent = ({ isLogin, onAuthenticate }: AuthContentTypes) => {
	const navigation = useNavigation();

	const [credentialsInvalid, setCredentialsInvalid] =
		useState<CredentialBooleanType>({
			email: false,
			password: false,
			confirmEmail: false,
			confirmPassword: false,
		});

	const switchAuthModeHandler = () => {
		if (isLogin) {
			return navigation.navigate(AllNavigationName.signup as never);
		}
		return navigation.navigate(AllNavigationName.login as never);
	};

	const submitHandler = (credentials: CredentialType) => {
		let { email, confirmEmail, password, confirmPassword } = credentials;

		email = email.trim();
		password = password.trim();

		const emailIsValid = email.includes('@');
		const passwordIsValid = password.length > 6;
		const emailsAreEqual = email === confirmEmail;
		const passwordsAreEqual = password === confirmPassword;

		if (
			!emailIsValid ||
			!passwordIsValid ||
			(!isLogin && (!emailsAreEqual || !passwordsAreEqual))
		) {
			Alert.alert('Invalid input', 'Please check your entered credentials.');
			setCredentialsInvalid({
				email: !emailIsValid,
				confirmEmail: !emailIsValid || !emailsAreEqual,
				password: !passwordIsValid,
				confirmPassword: !passwordIsValid || !passwordsAreEqual,
			});
			return;
		}
		onAuthenticate({ email, password });
	};

	return (
		<LinearGradient
			colors={[Colors.pink700, Colors.blue500]}
			style={styles.container}
		>
			<Logo />
			<ScrollView style={styles.form}>
				<AuthForm
					isLogin={isLogin}
					onSubmit={submitHandler}
					credentialsInvalid={credentialsInvalid}
				/>
				<View style={styles.buttons}>
					<FlatButton onPress={switchAuthModeHandler}>
						{isLogin ? 'Create a new user' : 'Log in instead'}
					</FlatButton>
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
	buttons: {
		marginTop: 8,
	},
});

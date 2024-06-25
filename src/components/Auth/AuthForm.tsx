import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { AuthFormTypes } from '../../constants/types';
import { Button, Input } from '../UI';

export const AuthForm = ({
	isLogin,
	onSubmit,
	credentialsInvalid,
}: AuthFormTypes) => {
	const [enteredEmail, setEnteredEmail] = useState<string>('');
	const [enteredConfirmEmail, setEnteredConfirmEmail] = useState<string>('');
	const [enteredPassword, setEnteredPassword] = useState<string>('');
	const [enteredConfirmPassword, setEnteredConfirmPassword] =
		useState<string>('');

	const {
		email: emailIsInvalid,
		confirmEmail: emailsDontMatch,
		password: passwordIsInvalid,
		confirmPassword: passwordsDontMatch,
	} = credentialsInvalid;

	const updateInputValueHandler = (inputType: any, enteredValue: string) => {
		switch (inputType) {
			case 'email':
				setEnteredEmail(enteredValue);
				break;
			case 'confirmEmail':
				setEnteredConfirmEmail(enteredValue);
				break;
			case 'password':
				setEnteredPassword(enteredValue);
				break;
			case 'confirmPassword':
				setEnteredConfirmPassword(enteredValue);
				break;
		}
	};

	const submitHandler = () => {
		onSubmit({
			email: enteredEmail,
			confirmEmail: enteredConfirmEmail,
			password: enteredPassword,
			confirmPassword: enteredConfirmPassword,
		});
	};

	return (
		<View style={styles.container}>
			<Input
				placeholder='Enter your email address'
				onUpdateValue={updateInputValueHandler.bind(this, 'email')}
				keyboardType='email-address'
				value={enteredEmail}
				isInvalid={emailIsInvalid}
			/>
			{!isLogin && (
				<Input
					placeholder='Confirm Email Address'
					onUpdateValue={updateInputValueHandler.bind(this, 'confirmEmail')}
					value={enteredConfirmEmail}
					keyboardType='email-address'
					isInvalid={emailsDontMatch}
				/>
			)}
			<Input
				placeholder='Enter your password'
				onUpdateValue={updateInputValueHandler.bind(this, 'password')}
				secure
				value={enteredPassword}
				isInvalid={passwordIsInvalid}
			/>
			{!isLogin && (
				<Input
					placeholder='Confirm your password'
					onUpdateValue={updateInputValueHandler.bind(this, 'confirmPassword')}
					secure
					value={enteredConfirmPassword}
					isInvalid={passwordsDontMatch}
				/>
			)}
			<View style={styles.buttons}>
				<Button onPress={submitHandler}>
					{isLogin ? 'Log In' : 'Sign Up'}
				</Button>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	buttons: {
		marginTop: 12,
	},
});

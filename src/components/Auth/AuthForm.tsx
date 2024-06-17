import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input } from '../UI';
import { Colors } from '../../constants';
import { AuthFormTypes } from '../../constants/types';

export const AuthForm = ({
	isLogin,
	onSubmit,
	credentialsInvalid,
}: AuthFormTypes) => {
	const [enteredName, setEnteredName] = useState<string>('');
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
			case 'name':
				setEnteredName(enteredValue);
				break;
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
				placeholder='Enter your name'
				onUpdateValue={updateInputValueHandler.bind(this, 'name')}
				value={enteredName}
			/>
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
		flex: 1,
		backgroundColor: Colors.grey200,
		alignItems: 'center',
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
	},
	buttons: {
		marginTop: 12,
	},
});

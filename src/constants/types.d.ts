import { ReactNode } from 'react';

export type AssetsLiabilitiesTypes = {
	label: string;
	location?: string;
	editable?: boolean;
	onChangeText?: any;
	value: string;
};

export type AssetLiabilitiesHeaderTypes = {
	label: string;
	location: string;
	value: string;
	textColor: string;
};

export type AuthContentTypes = {
	isLogin?: boolean;
	onAuthenticate: ({ email: string, password: string }) => void;
};

export type AuthFormTypes = {
	isLogin?: boolean;
	onSubmit: (arg0: CredentialType) => void;
	credentialsInvalid: CredentialBooleanType;
};

export type AuthenticateTypes = {
	mode: string;
	email: string;
	password: string;
};

export type ButtonTypes = {
	children: ReactNode;
	onPress: () => void;
	icons?: string;
	name?: any;
	color?: string;
	size?: number;
};

export type CreateloginTypes = {
	email: string;
	password: string;
};

export type CredentialBooleanType = {
	email: boolean;
	password: boolean;
	confirmEmail: boolean;
	confirmPassword: boolean;
};

export type CredentialType = {
	email: string;
	password: string;
	confirmEmail: string;
	confirmPassword: string;
};

export type ErrorOverlayTypes = {
	message: string;
	onConfirm: () => void;
};

export type IconButtonType = {
	icon: any;
	color: string;
	size: number;
	onPress: () => void;
};

export type InputTypes = {
	isInvalid?: boolean;
	keyboardType?: any;
	onUpdateValue: (arg0: string) => void;
	placeholder: string;
	secure?: boolean;
	value: string;
};

export type LoadingOverlayTypes = {
	message: string;
};

export type MpinLoginTypes = {
	id: string;
	loginid: string;
	mpin: string;
};

export type Tile1Types = {
	children: ReactNode;
	image: any;
};

export type Tile2Types = {
	imageSource: any;
	fundLabel: string;
	holdingPercentage: string;
	gradientColor: array;
	investedValue: string;
	marketValue: string;
};

export type Tile3Types = {
	investedValue: string;
	marketValue: string;
};

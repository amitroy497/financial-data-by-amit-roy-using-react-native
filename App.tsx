import { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
	AuthContext,
	AuthContextProvider,
	DashboardScreen,
	IconButton,
	LoginScreen,
	SignupScreen,
} from './src';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='Login' component={LoginScreen} />
			<Stack.Screen name='Signup' component={SignupScreen} />
		</Stack.Navigator>
	);
};

const AuthenticatedStack = () => {
	const authCtx = useContext(AuthContext);

	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Dashboard'
				component={DashboardScreen}
				options={{
					headerRight: ({ tintColor }: any) => (
						<IconButton
							icon='exit'
							color={tintColor}
							size={24}
							onPress={authCtx.logout}
						/>
					),
				}}
			/>
		</Stack.Navigator>
	);
};

const Navigation = () => {
	const authCtx = useContext(AuthContext);

	return (
		<NavigationContainer>
			{!authCtx.isAuthenticated ? <AuthStack /> : <AuthenticatedStack />}
		</NavigationContainer>
	);
};

const App = () => {
	return (
		<>
			<StatusBar style='light' />
			<AuthContextProvider>
				<Navigation />
			</AuthContextProvider>
		</>
	);
};

export default App;

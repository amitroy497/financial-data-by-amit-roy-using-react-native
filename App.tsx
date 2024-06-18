import { StatusBar } from 'expo-status-bar';
import { AuthContextProvider } from './src';
import { Navigation } from './src/components/Nav/Navigation';

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

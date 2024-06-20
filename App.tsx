import { StatusBar } from 'expo-status-bar';
import { AuthContextProvider, Store } from './src';
import { Navigation } from './src/components/Nav/Navigation';
import { Provider } from 'react-redux';

const App = () => {
	return (
		<>
			<StatusBar style='light' />
			<AuthContextProvider>
				<Provider store={Store}>
					<Navigation />
				</Provider>
			</AuthContextProvider>
		</>
	);
};

export default App;

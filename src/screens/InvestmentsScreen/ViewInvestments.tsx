import { StyleSheet } from 'react-native';
import { MutualFunds } from '../../components';
import { AllNavigationName } from '../../constants';

export const ViewInvestments = () => {
	return <MutualFunds location={AllNavigationName.viewInvestments} />;
};

const styles = StyleSheet.create({
	tilesContainer: {
		marginVertical: 20,
		marginHorizontal: 15,
	},
});

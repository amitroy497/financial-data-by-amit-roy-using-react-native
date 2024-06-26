import { StyleSheet, View } from 'react-native';
import { UpdateResetButtonTypes } from '../../constants/types';
import { Button } from './Button';

export const UpdateResetButtons = ({
	isVisible,
	resetHandler,
	updateHandler,
}: UpdateResetButtonTypes) => {
	return (
		<>
			{isVisible && (
				<View style={styles.buttonContainer}>
					<Button
						onPress={resetHandler}
						icons='Ionicons'
						name='reload-circle-outline'
						size={18}
						color='black'
					>
						Reset
					</Button>
					<Button
						onPress={updateHandler}
						icons='MaterialIcons'
						name='update'
						size={18}
						color='black'
					>
						Update
					</Button>
				</View>
			)}
		</>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginHorizontal: 20,
		marginVertical: 30,
	},
});

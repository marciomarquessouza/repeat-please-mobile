import { StyleSheet } from 'react-native';
import { color } from 'repeat-please-styles';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: color.background,
		padding: 10,
	},
	formStyle: {
		marginVertical: 20,
	},
	buttonStyle: {
		marginVertical: 10,
	},
});

import { StyleSheet } from 'react-native';
import { color } from 'repeat-please-styles';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: color.background,
	},
	scrollStyle: {
		flexGrow: 1,
	},
	wrapper: {
		height: '100%',
		padding: 10,
		justifyContent: 'space-between',
	},
	logoContainer: {
		marginTop: 10,
		alignItems: 'center',
	},
	formStyle: {
		marginVertical: 20,
	},
	buttonStyle: {
		marginVertical: 5,
	},
	logoStyle: {
		height: 100,
		width: 100,
	},
	messageStyle: {
		marginVertical: 5,
	},
});

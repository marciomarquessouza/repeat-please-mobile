import { StyleSheet } from 'react-native';
import { color } from 'repeat-please-styles';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundColor: color.background,
	},
	scrollStyle: {
		flexGrow: 1,
	},
	wrapper: {
		padding: 10,
		justifyContent: 'space-around',
	},
	logoContainer: {
		paddingTop: 20,
		alignItems: 'center',
		justifyContent: 'center',
	},
	formStyle: {
		marginVertical: 20,
	},
	buttonStyle: {
		marginVertical: 5,
	},
	loginButtonStyle: {
		marginTop: 20,
	},
	logoStyle: {
		height: 100,
		width: 100,
	},
	messageStyle: {
		marginVertical: 5,
	},
});

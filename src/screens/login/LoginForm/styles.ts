import { StyleSheet } from 'react-native';
import { color } from 'repeat-please-styles';

export const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: color.background,
	},
	scrollStyle: {
		flexGrow: 1,
		justifyContent: 'space-between',
	},
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 10,
	},
	logoContainer: {
		paddingTop: 20,
		alignItems: 'center',
		justifyContent: 'center',
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
	loginButtonStyle: {
		marginTop: 15,
	},
});

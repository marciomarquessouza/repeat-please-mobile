import { StyleSheet } from 'react-native';
import { color } from 'repeat-please-styles';

export const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: color.background,
	},
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 10,
	},
	logoStyle: {
		height: 100,
		width: 100,
		marginTop: 20,
	},
	titleStyle: {
		paddingVertical: 20,
	},
	buttonStyle: {
		paddingHorizontal: 5,
	},
	inputContainer: {
		flexDirection: 'row',
		marginHorizontal: 20,
	},
	inputStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

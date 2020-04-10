import { StyleSheet } from 'react-native';
import { color } from 'repeat-please-styles';

export const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: color.background,
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
	},
	buttonStyle: {
		marginVertical: 8,
	},
	dividerStyle: {
		marginVertical: 8,
	},
});

import { color } from 'repeat-please-styles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	headerStyle: {
		backgroundColor: color.background,
		elevation: 0,
		shadowOpacity: 0,
		borderBottomWidth: 0,
	},
	headerTitleContainer: {
		flex: 1,
		alignItems: 'center',
	},
	headerTitleStyle: {
		fontSize: 16,
	},
	headerRightStyle: {
		flex: 1,
	},
});

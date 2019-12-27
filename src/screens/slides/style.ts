import { StyleSheet } from 'react-native';
import { color } from 'repeat-please-styles';

export const style = StyleSheet.create({
	slideContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: color.background,
	},
	textStyle: {
		textAlign: 'center',
		flexWrap: 'wrap',
		paddingHorizontal: 10,
		paddingVertical: 20,
	},
});

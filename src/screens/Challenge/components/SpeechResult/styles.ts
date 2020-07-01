import { StyleSheet } from 'react-native';
import { font } from 'repeat-please-styles';

export const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	titleStyle: {
		fontFamily: font.primaryLight,
		fontSize: 15,
		lineHeight: 33,
	},
	resultContainer: {
		flexDirection: 'row',
	},
	resultStyle: {
		fontFamily: font.primary,
		fontSize: 30,
		lineHeight: 35,
	},
	scoreStyle: {
		fontFamily: font.title,
		fontSize: 24,
		lineHeight: 41,
	},
	monkeyFaceStyle: {
		marginVertical: 10,
	},
});

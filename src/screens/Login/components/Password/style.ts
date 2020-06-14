import { StyleSheet } from 'react-native';
import { font } from 'repeat-please-styles';

export const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		paddingHorizontal: 15,
	},
	headerContainer: {
		paddingBottom: 10,
		alignItems: 'center',
	},
	imageStyle: {
		marginVertical: 15,
	},
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	titleStyle: {
		fontFamily: font.title,
		fontSize: 22,
		marginVertical: 8,
	},
	buttonStyle: {
		paddingHorizontal: 10,
	},
});

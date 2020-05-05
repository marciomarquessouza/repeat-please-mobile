import { StyleSheet } from 'react-native';
import { color, font } from 'repeat-please-styles';

export const styles = StyleSheet.create({
	container: {
		backgroundColor: color.background,
		marginHorizontal: 15,
		marginVertical: 22,
		borderRadius: 30,
		height: 200,
	},
	cardHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginHorizontal: 30,
		marginTop: 20,
	},
	symbolContainer: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	IPASymbolStyle: {
		fontFamily: font.phoneticSymbol,
		fontSize: 85,
		lineHeight: 92,
	},
	symbolType: {
		fontFamily: font.primaryLight,
		letterSpacing: 2,
		fontSize: 16,
	},
	scoreContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	starContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	star: {
		marginVertical: 5,
		marginHorizontal: 2,
	},
	emptyStar: {
		opacity: 0.2,
	},
	cardBottom: {
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 5,
	},
});

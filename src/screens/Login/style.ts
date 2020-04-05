import { StyleSheet } from 'react-native';
import { color, font } from 'repeat-please-styles';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: color.background,
	},
	backArrowStyle: {
		width: '100%',
	},
	animationContainer: {
		height: 310,
		width: '100%',
	},
	forgotPasswordStyle: {
		marginVertical: 40,
	},
	signUpContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
		paddingBottom: 30,
	},
	signUpText: {
		fontSize: 22,
		fontWeight: 'bold',
		paddingRight: 10,
		fontFamily: font.primaryLight,
	},
});

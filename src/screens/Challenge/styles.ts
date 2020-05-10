import { StyleSheet } from 'react-native';
import { color, font } from 'repeat-please-styles';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: color.background,
		overflow: 'hidden',
	},
	repeatWordStyle: {
		fontFamily: font.primary,
		fontSize: 60,
		letterSpacing: 15,
	},
	ipaStyle: {
		fontSize: 22,
	},
	arcContainer: {
		alignItems: 'center',
		overflow: 'hidden',
		width: 620,
		height: 310,
		backgroundColor: '#fff',
		borderBottomStartRadius: 310,
		borderBottomEndRadius: 310,
		paddingTop: 20,
	},
	panelContainer: {
		flexDirection: 'row',
		marginTop: 32,
	},
	panelIconStyle: {
		marginHorizontal: 25,
	},
	micIconStyle: {
		marginTop: 16,
	},
});

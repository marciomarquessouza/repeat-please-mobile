import { StyleSheet } from 'react-native';
import { color, font } from 'repeat-please-styles';

export const TIMER_CIRCLE = 620;

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
		zIndex: 9,
	},
	micIconStyle: {
		marginTop: 16,
	},
	timeArcContainer: {
		position: 'absolute',
		top: 0,
		width: 620,
		height: 620,
		zIndex: -9,
	},
	timerArcStyle: {
		width: TIMER_CIRCLE,
		height: TIMER_CIRCLE,
		borderRadius: TIMER_CIRCLE / 2,
		paddingTop: 20,
		borderWidth: 7,
		borderTopColor: '#fff',
		borderBottomColor: '#FF9983',
		borderLeftColor: '#fff',
		borderRightColor: '#fff',
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
	},
	timerPointer: {
		position: 'absolute',
		width: 18,
		height: 18,
		borderRadius: 9,
		backgroundColor: '#FF9983',
	},
	timerContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 20,
	},
	timerTextStyle: {
		fontSize: 18,
		fontFamily: font.primaryLight,
	},
	resultContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 5,
	},
	resultTextStyle: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 5,
	},
	starsDescriptionTextStyle: {
		fontSize: 14,
		fontFamily: font.primaryLight,
		marginTop: 5,
	},
	listeningContainer: {
		marginVertical: 15,
	},
});

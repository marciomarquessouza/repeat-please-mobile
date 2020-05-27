import { StyleSheet } from 'react-native';
import { font } from 'repeat-please-styles';

export const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	audioWaveContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 130,
		height: 74,
	},
	micWaveContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 84,
		height: 86,
	},
	micWaveStyle: {
		marginTop: 70,
	},
	chimpListeningStyle: {
		position: 'absolute',
	},
	chimpSpeakingStyle: {
		position: 'absolute',
	},
	textStyle: {
		fontSize: 20,
		fontFamily: font.title,
		marginBottom: 10,
	},
});

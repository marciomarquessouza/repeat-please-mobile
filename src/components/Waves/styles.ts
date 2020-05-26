import { StyleSheet, Dimensions } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const MAX_WAVE_HEIGHT = 160;

export const styles = StyleSheet.create({
	container: {
		width: SCREEN_WIDTH,
		height: MAX_WAVE_HEIGHT,
	},
	waveContainer: {
		width: SCREEN_WIDTH,
		height: MAX_WAVE_HEIGHT / 2,
		flexDirection: 'row',
		justifyContent: 'flex-start',
	},
	waveAboveContainer: {
		alignItems: 'flex-end',
	},
	waveBelowContainer: {
		alignItems: 'flex-start',
	},
});

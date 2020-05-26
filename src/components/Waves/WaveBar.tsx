import React from 'react';
import { Animated, StyleSheet } from 'react-native';

interface IWaveBarProp {
	height: number;
	left: number;
	side?: 'up' | 'down';
}

export const BAR_WIDTH = 12;

export const WaveBar = ({ height, left, side = 'up' }: IWaveBarProp) => {
	const rotate = side === 'up' ? '0deg' : '180deg';

	return (
		<Animated.View
			style={[styles.barStyle, { height, left, transform: [{ rotate }] }]}
		/>
	);
};

export const styles = StyleSheet.create({
	barStyle: {
		backgroundColor: '#000',
		width: BAR_WIDTH,
		borderTopStartRadius: BAR_WIDTH / 2,
		borderTopEndRadius: BAR_WIDTH / 2,
	},
});

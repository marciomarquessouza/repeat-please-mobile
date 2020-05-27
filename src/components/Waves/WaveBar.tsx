import React, { useState } from 'react';
import { timingAnimation } from '../../utils/animations';
import { Animated, StyleSheet } from 'react-native';

interface IWaveBarProp {
	height: number;
	left: number;
	side?: 'up' | 'down';
}

export const BAR_WIDTH = 12;

export const WaveBar = ({ height, left, side = 'up' }: IWaveBarProp) => {
	const [barScale] = useState(new Animated.Value(0));
	const rotate = side === 'up' ? '0deg' : '180deg';

	const barAnimation = Animated.loop(
		Animated.sequence([
			timingAnimation(barScale, height, 400),
			Animated.delay(100),
			timingAnimation(barScale, 0, 400),
		]),
	);

	barAnimation.start();

	return (
		<Animated.View
			style={[
				styles.barStyle,
				{ height: barScale, left, transform: [{ rotate }] },
			]}
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

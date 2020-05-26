import React from 'react';
import { View } from 'react-native';
import { WaveBar, BAR_WIDTH } from './WaveBar';
import { styles, SCREEN_WIDTH } from './styles';

interface IBasicMathProps {
	a: number;
	b: number;
}

interface IArithmeticProgressProps {
	qnt: number;
	commonDifference: number;
	first: number;
}

const sum = ({ a, b }: IBasicMathProps) => a + b;
const sub = ({ a, b }: IBasicMathProps) => a - b;

const HALF_WAVE = 8;
const BARS_TOTAL = SCREEN_WIDTH / BAR_WIDTH;
let direction: 'up' | 'down' = 'up';
let operation = sum;

const arithmeticProgress = ({
	qnt,
	commonDifference,
	first,
}: IArithmeticProgressProps) => {
	const arrayResult = [{ height: first, side: 'up' }];
	Array(qnt)
		.fill(commonDifference)
		.reduce((acumulator, currentValue, index) => {
			if ((1 + index) % HALF_WAVE === 0) {
				operation = operation === sum ? sub : sum;
			}
			direction = direction === 'down' ? 'up' : 'down';
			const height = operation({ a: acumulator, b: currentValue });
			arrayResult.push({ height, side: direction });
			return height;
		}, first);
	return arrayResult;
};

const waveBarsDirection = arithmeticProgress({
	qnt: Math.trunc(BARS_TOTAL),
	commonDifference: 8,
	first: 14,
});

export const Waves = () => {
	const waveBarsUp = waveBarsDirection.filter(bar => bar.side === 'up');
	const waveBarsDown = waveBarsDirection.filter(bar => bar.side === 'down');
	let barPositionUp = -BAR_WIDTH;
	let barPositionDown = 0;

	return (
		<View style={styles.container}>
			<View style={[styles.waveContainer, styles.waveAboveContainer]}>
				{waveBarsUp.map((bar, index) => {
					barPositionUp = barPositionUp + BAR_WIDTH;
					return (
						<WaveBar key={index} height={bar.height} left={barPositionUp} />
					);
				})}
			</View>
			<View style={[styles.waveContainer, styles.waveBelowContainer]}>
				{waveBarsDown.map((bar, index) => {
					barPositionDown = barPositionDown + BAR_WIDTH;
					return (
						<WaveBar
							key={index}
							height={bar.height}
							left={barPositionDown}
							side="down"
						/>
					);
				})}
			</View>
		</View>
	);
};

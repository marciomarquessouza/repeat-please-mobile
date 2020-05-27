import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import { AudioWaveSVG } from './SVG/AudioWaveSVG';
import { chimpListening } from '../../../assets/images';
import { styles } from './styles';

type colorPositionType = 'first' | 'second' | 'third';

const WAVE_RED = '#FF5733';
const WAVE_BLACK = '#000';
const POSITIONS: colorPositionType[] = ['first', 'second', 'third'];
const WAVE_SPEED = 400;

const audioWaveColors = (colorToChange: colorPositionType) => {
	switch (colorToChange) {
		case 'first':
			return {
				first: WAVE_RED,
				second: WAVE_BLACK,
				third: WAVE_BLACK,
			};
		case 'second':
			return {
				first: WAVE_BLACK,
				second: WAVE_RED,
				third: WAVE_BLACK,
			};
		case 'third':
			return {
				first: WAVE_BLACK,
				second: WAVE_BLACK,
				third: WAVE_RED,
			};
	}
};

export const AudioWaves = () => {
	const [waveColor, setWaveColor] = useState<colorPositionType>('first');

	useEffect(() => {
		const position = POSITIONS.findIndex(pos => pos === waveColor);
		const waveId = setInterval(() => {
			setWaveColor(position >= 2 ? POSITIONS[0] : POSITIONS[position + 1]);
		}, WAVE_SPEED);
		return () => clearInterval(waveId);
	}, [waveColor]);

	return (
		<View style={styles.container}>
			<AudioWaveSVG
				style={styles.audioWaveStyle}
				{...{ ...audioWaveColors(waveColor) }}
			/>
			<Image source={chimpListening} style={styles.chimpListeningStyle} />
		</View>
	);
};

import React, { useState, useEffect } from 'react';
import { Animated, Text, Image, Dimensions } from 'react-native';
import { styles } from './styles';
import { timingAnimation } from '../../utils/animations';
import { countdown1, countdown2, countdown3 } from '../../../assets/images';

interface IInitialCountdownProps {
	hasFinished: () => void;
}

const SCREEN_WIDTH = Dimensions.get('screen').width;
const TRANSITION_SPEED = 200;
const STOP_SPEED = 1000;

export const InitialCountdown = ({ hasFinished }: IInitialCountdownProps) => {
	const countdownImages = [countdown3, countdown2, countdown1];
	const [scene, setScene] = useState<number>(0);
	const [sceneAnimated] = useState(new Animated.Value(-1));

	useEffect(() => {
		Animated.sequence([
			timingAnimation(sceneAnimated, 0, TRANSITION_SPEED),
			Animated.delay(STOP_SPEED),
			timingAnimation(sceneAnimated, 1, TRANSITION_SPEED),
		]).start(() => {
			sceneAnimated.setValue(-1);
			scene < 3 ? setScene(scene + 1) : hasFinished();
		});
	}, [scene, sceneAnimated, hasFinished]);

	const scenePosX = sceneAnimated.interpolate({
		inputRange: [-1, 0, 1],
		outputRange: [SCREEN_WIDTH, 0, -SCREEN_WIDTH],
	});

	return (
		<Animated.View
			style={[
				styles.container,
				{ width: SCREEN_WIDTH, transform: [{ translateX: scenePosX }] },
			]}>
			{scene < 3 ? (
				<Image source={countdownImages[scene]} />
			) : (
				<Text style={styles.textStyle}>READY!!!</Text>
			)}
		</Animated.View>
	);
};

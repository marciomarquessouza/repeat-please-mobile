import React, { useState } from 'react';
import { View, Animated, Dimensions, ScrollView, Text } from 'react-native';
import { CountdownTimer, AudioWaves } from '../../components';
import { Header } from './components';
import { styles, TIMER_CIRCLE } from './styles';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const HALF_SCREEN = SCREEN_WIDTH / 2;
const TIMER_CIRCLE_RADIUS = TIMER_CIRCLE / 2;
const TIMER_POINTER_X = Math.sin((45 * Math.PI) / 180) * TIMER_CIRCLE_RADIUS;
const TIMER_POINTER_Y = Math.cos((45 * Math.PI) / 180) * TIMER_CIRCLE_RADIUS;
const INTERSECTION_ANGLE =
	Math.asin(HALF_SCREEN / TIMER_CIRCLE_RADIUS) * (180 / Math.PI);
const ANGLE_START = 45 - INTERSECTION_ANGLE;
const ANGLE_END = INTERSECTION_ANGLE + 45;
const TIMER_ARC_SPEED = 30000;

const timerAnimation = (
	component: Animated.Value,
	toValue: number,
	duration: number,
) => Animated.timing(component, { toValue, duration });

export const Challenge = () => {
	const [timerArc] = useState(new Animated.Value(0));
	const [startTimer, setStartTimer] = useState(false);

	const startTimerAnimation = () => {
		timerArc.setValue(0);
		setStartTimer(true);
		timerAnimation(timerArc, 1, TIMER_ARC_SPEED + 1000).start();
	};

	const repeatTimerAnimation = () => timerArc.setValue(0);

	const arcDegree = timerArc.interpolate({
		inputRange: [0, 1],
		outputRange: [`${ANGLE_START}deg`, `${ANGLE_END}deg`],
	});

	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
			<View style={styles.container}>
				<Header
					onPressRepeat={repeatTimerAnimation}
					onPressStart={startTimerAnimation}
					onPressSkip={() => undefined}
				/>
				<View style={styles.timeArcContainer}>
					<Animated.View
						style={[
							styles.timerArcStyle,
							{ transform: [{ translateY: -304 }, { rotate: arcDegree }] },
						]}>
						<View
							style={[
								styles.timerPointer,
								{
									transform: [
										{ translateX: TIMER_POINTER_X },
										{ translateY: TIMER_POINTER_Y - 6 },
									],
								},
							]}
						/>
					</Animated.View>
				</View>
				<View style={styles.timerContainer}>
					<CountdownTimer
						miliseconds={TIMER_ARC_SPEED}
						style={styles.timerTextStyle}
						startTimer={startTimer}
					/>
				</View>
				<View style={styles.resultContainer}>
					<Text style={styles.listeningStyle}>Listening...</Text>
					<View style={styles.listeningContainer}>
						<AudioWaves />
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

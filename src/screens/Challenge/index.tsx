import React, { useState, useEffect, useRef, useCallback } from 'react';
import { View, Animated, Dimensions, ScrollView } from 'react-native';
import { CountdownTimer, ICountdownTimerRef } from '../../components';
import { Header, ArcTimer } from './components';
import { styles, TIMER_CIRCLE } from './styles';
import { timingAnimation } from '../../utils/animations';
import { StatusResult } from './components';

export type StatusType =
	| 'countdown'
	| 'initializing'
	| 'started'
	| 'listening'
	| 'awaiting'
	| 'speaking'
	| 'result';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const HALF_SCREEN = SCREEN_WIDTH / 2;
const TIMER_CIRCLE_RADIUS = TIMER_CIRCLE / 2;
const TIMER_POINTER_X = Math.sin((45 * Math.PI) / 180) * TIMER_CIRCLE_RADIUS;
const TIMER_POINTER_Y = Math.cos((45 * Math.PI) / 180) * TIMER_CIRCLE_RADIUS;
const INTERSECTION_ANGLE =
	Math.asin(HALF_SCREEN / TIMER_CIRCLE_RADIUS) * (180 / Math.PI);
const ANGLE_START = 45 - INTERSECTION_ANGLE;
const ANGLE_END = INTERSECTION_ANGLE + 45;
const ARC_POSITION = -304;
const TIMER_ARC_SPEED = 3e4;

export const Challenge = () => {
	const [timerArc] = useState(new Animated.Value(0));
	const [status, setStatus] = useState<StatusType>('countdown');
	const timerRef = useRef<ICountdownTimerRef>(null);

	const startTimerAnimation = useCallback(() => {
		timerArc.setValue(0);
		timerRef.current?.startTimer(TIMER_ARC_SPEED / 1e3);
		timingAnimation(timerArc, 1, TIMER_ARC_SPEED + 1e3).start();
	}, [timerArc]);

	const arcDegree = timerArc.interpolate({
		inputRange: [0, 1],
		outputRange: [`${ANGLE_START}deg`, `${ANGLE_END}deg`],
	});

	useEffect(() => {
		if (status === 'started') {
			startTimerAnimation();
		}
	}, [status, startTimerAnimation]);

	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
			<View style={styles.container}>
				<Header
					onPressRepeat={() => setStatus('speaking')}
					onPressStart={() => undefined}
					onPressSkip={() => undefined}
				/>
				<View style={styles.timeArcContainer}>
					<ArcTimer
						rotate={arcDegree}
						translateX={TIMER_POINTER_X}
						translateY={TIMER_POINTER_Y - 6}
						position={ARC_POSITION}
					/>
				</View>
				<View style={styles.timerContainer}>
					<CountdownTimer style={styles.timerTextStyle} ref={timerRef} />
				</View>
				<StatusResult {...{ status, setStatus }} />
			</View>
		</ScrollView>
	);
};

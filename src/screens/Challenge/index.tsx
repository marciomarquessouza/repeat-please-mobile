import React, { useState } from 'react';
import { View, Animated, Dimensions, ScrollView } from 'react-native';
import {
	CountdownTimer,
	ChimpAudioWaves,
	InitialCountdown,
	TextToSpeech,
} from '../../components';
import { Header, ArcTimer } from './components';
import { styles, TIMER_CIRCLE } from './styles';
import { timingAnimation } from '../../utils/animations';

type statusType = 'countdown' | 'initial' | 'listening' | 'speaking' | 'result';

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
const TIMER_ARC_SPEED = 30000;

// eslint-disable-next-line max-lines-per-function
export const Challenge = () => {
	const [timerArc] = useState(new Animated.Value(0));
	const [startTimer, setStartTimer] = useState(false);
	const [status, setStatus] = useState<statusType>('countdown');

	const startTimerAnimation = () => {
		timerArc.setValue(0);
		setStartTimer(true);
		timingAnimation(timerArc, 1, TIMER_ARC_SPEED + 1000).start();
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
					<ArcTimer
						rotate={arcDegree}
						translateX={TIMER_POINTER_X}
						translateY={TIMER_POINTER_Y - 6}
						position={ARC_POSITION}
					/>
				</View>
				<View style={styles.timerContainer}>
					<CountdownTimer
						miliseconds={TIMER_ARC_SPEED}
						style={styles.timerTextStyle}
						startTimer={startTimer}
					/>
				</View>
				<View style={styles.resultContainer}>
					{status === 'countdown' && (
						<InitialCountdown hasFinished={() => setStatus('speaking')} />
					)}
					{status === 'speaking' && (
						<View style={styles.listeningContainer}>
							<TextToSpeech
								text="nothing"
								startSpeech={status === 'speaking'}
								delay={1000}
								onFinish={() => setStatus('listening')}>
								<ChimpAudioWaves label="Speaking..." type="speaking" />
							</TextToSpeech>
						</View>
					)}
					{status === 'listening' && (
						<View style={styles.listeningContainer}>
							<ChimpAudioWaves label="Listening..." />
						</View>
					)}
				</View>
			</View>
		</ScrollView>
	);
};

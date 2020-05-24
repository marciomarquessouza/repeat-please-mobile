import React, { useState } from 'react';
import { View, Text, Animated, Dimensions, ScrollView } from 'react-native';
import { IconButton } from '../../components';
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
const TIMER_ARC_SPEED = 8000;

const timerAnimation = (
	component: Animated.Value,
	toValue: number,
	duration: number,
) => Animated.timing(component, { toValue, duration });

export const Challenge = () => {
	const [timerArc] = useState(new Animated.Value(0));

	const startTimerAnimation = () => {
		timerArc.setValue(0);
		timerAnimation(timerArc, 1, TIMER_ARC_SPEED).start();
	};

	const repeatTimerAnimation = () => timerArc.setValue(0);

	const arcDegree = timerArc.interpolate({
		inputRange: [0, 1],
		outputRange: [`${ANGLE_START}deg`, `${ANGLE_END}deg`],
	});

	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
			<View style={styles.container}>
				<View style={styles.arcContainer}>
					<Text style={styles.repeatWordStyle}>TASK</Text>
					<Text style={styles.ipaStyle}>tæsk</Text>
					<View style={styles.panelContainer}>
						<IconButton
							name="repeat"
							style={styles.panelIconStyle}
							onPress={repeatTimerAnimation}
						/>
						<IconButton
							name="mic"
							style={[styles.panelIconStyle, styles.micIconStyle]}
							onPress={startTimerAnimation}
						/>
						<IconButton name="skip" style={styles.panelIconStyle} />
					</View>
				</View>
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
			</View>
		</ScrollView>
	);
};

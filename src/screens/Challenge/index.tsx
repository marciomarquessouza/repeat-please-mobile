import React, { useState } from 'react';
import { View, Text, Animated, Dimensions } from 'react-native';
import { IconButton } from '../../components';
import { styles, TIMER_CIRCLE } from './styles';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const TIMER_CIRCLE_RADIUS = TIMER_CIRCLE / 2;
const INTERSECTION_ANGLE =
	Math.asin(SCREEN_WIDTH / 2 / TIMER_CIRCLE_RADIUS) * (180 / Math.PI);
const ANGLE_START = 45 - INTERSECTION_ANGLE;
const ANGLE_END = INTERSECTION_ANGLE + 45;

const timerAnimation = (
	component: Animated.Value,
	toValue: number,
	duration: number,
) => Animated.timing(component, { toValue, duration });

export const Challenge = () => {
	const [timerArc] = useState(new Animated.Value(0));

	timerAnimation(timerArc, 1, 8000).start();
	const arcDegree = timerArc.interpolate({
		inputRange: [0, 1],
		outputRange: [`${ANGLE_START}deg`, `${ANGLE_END}deg`],
	});
	return (
		<View style={styles.container}>
			<View style={styles.arcContainer}>
				<Text style={styles.repeatWordStyle}>TASK</Text>
				<Text style={styles.ipaStyle}>tæsk</Text>
				<View style={styles.panelContainer}>
					<IconButton name="repeat" style={styles.panelIconStyle} />
					<IconButton
						name="mic"
						style={[styles.panelIconStyle, styles.micIconStyle]}
					/>
					<IconButton name="skip" style={styles.panelIconStyle} />
				</View>
			</View>
			<View style={styles.timeArcContainer}>
				<Animated.View
					style={[
						styles.timerArcStyle,
						{ transform: [{ translateY: -304 }, { rotate: arcDegree }] },
					]}
				/>
			</View>
		</View>
	);
};

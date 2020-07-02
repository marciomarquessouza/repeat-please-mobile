import React from 'react';
import { Animated, View } from 'react-native';
import { styles } from '../../styles';

interface IArcTimerProps {
	translateX: number;
	translateY: number;
	position: number;
	rotate: Animated.AnimatedInterpolation;
}

export const ArcTimer = ({
	translateX,
	translateY,
	rotate,
	position,
}: IArcTimerProps) => (
	<View style={styles.timeArcContainer}>
		<Animated.View
			style={[
				styles.timerArcStyle,
				{ transform: [{ translateY: position }, { rotate }] },
			]}>
			<View
				style={[
					styles.timerPointer,
					{
						transform: [{ translateX }, { translateY }],
					},
				]}
			/>
		</Animated.View>
	</View>
);

import React, { useState } from 'react';
import { Animated } from 'react-native';
import { styles } from './styles';
import { springAnimation, timingAnimation } from '../../utils/animations';

interface ICheckButtonProps {
	color?: string;
	isChecked: boolean;
}

const SPEED = 400;
const BOX_SCALE = 0.6;

export const CheckButton = ({
	color = '#000',
	isChecked = false,
}: ICheckButtonProps) => {
	const [line1Animation] = useState(new Animated.Value(0));
	const [line2Animation] = useState(new Animated.Value(0));
	const [boxAnimation] = useState(new Animated.Value(BOX_SCALE));

	(() => {
		Animated.parallel([
			springAnimation(boxAnimation, isChecked ? 1 : BOX_SCALE, 1),
			Animated.sequence([
				timingAnimation(line1Animation, isChecked ? 1 : 0, SPEED),
				timingAnimation(line2Animation, isChecked ? 1 : 0, SPEED),
			]),
		]).start();
	})();

	return (
		<>
			<Animated.View
				style={[
					styles.container,
					{
						backgroundColor: color,
						transform: [{ rotate: '45deg' }, { scale: boxAnimation }],
					},
				]}>
				<Animated.View
					style={[
						styles.line1Style,
						{ transform: [{ scale: line1Animation }], opacity: line1Animation },
					]}
				/>
				<Animated.View
					style={[
						styles.line2Style,
						{ transform: [{ scale: line2Animation }], opacity: line2Animation },
					]}
				/>
			</Animated.View>
		</>
	);
};

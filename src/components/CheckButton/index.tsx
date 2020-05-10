import React, { useState } from 'react';
import { Animated, TouchableWithoutFeedback } from 'react-native';
import { styles } from './styles';

interface ICheckButtonProps {
	color?: string;
	onPress: () => void;
	isChecked: boolean;
}

const linesAnimation = (
	component: Animated.Value,
	toValue: number,
	duration: number,
) => Animated.timing(component, { toValue, duration });

const springAnimation = (
	component: Animated.Value,
	toValue: number,
	friction: number,
) => Animated.spring(component, { toValue, friction });

const SPEED = 400;
const BOX_SCALE = 0.6;

export const CheckButton = ({
	color = '#000',
	onPress,
	isChecked = false,
}: ICheckButtonProps) => {
	const [line1Animation] = useState(new Animated.Value(0));
	const [line2Animation] = useState(new Animated.Value(0));
	const [boxAnimation] = useState(new Animated.Value(BOX_SCALE));

	(() => {
		Animated.parallel([
			springAnimation(boxAnimation, isChecked ? 1 : BOX_SCALE, 1),
			Animated.sequence([
				linesAnimation(line1Animation, isChecked ? 1 : 0, SPEED),
				linesAnimation(line2Animation, isChecked ? 1 : 0, SPEED),
			]),
		]).start();
	})();

	return (
		<TouchableWithoutFeedback onPress={onPress}>
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
		</TouchableWithoutFeedback>
	);
};

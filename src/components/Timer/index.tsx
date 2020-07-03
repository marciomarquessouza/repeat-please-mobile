import React, {
	useState,
	useEffect,
	useImperativeHandle,
	forwardRef,
} from 'react';
import { Text, TextStyle, StyleProp } from 'react-native';

interface ITimerProps {
	style?: StyleProp<TextStyle>;
	initialTime: number;
	onFinishTimer?: () => void;
}

export interface ITimerRef {
	startTimer: () => void;
}

export const Timer = forwardRef(
	({ style, initialTime, onFinishTimer }: ITimerProps, ref: any) => {
		const [timeLeft, setTimeLeft] = useState(initialTime);

		const startTimer = () => {
			setTimeLeft(initialTime - 1);
		};

		useImperativeHandle(ref, () => ({ startTimer }));

		useEffect(() => {
			if (!timeLeft) {
				return onFinishTimer && onFinishTimer();
			}
			if (timeLeft === initialTime) return;
			const intervalId = setInterval(() => {
				setTimeLeft(timeLeft - 1);
			}, 1000);
			return () => clearInterval(intervalId);
		}, [timeLeft, setTimeLeft, initialTime, onFinishTimer]);

		return <Text style={style}>{`${timeLeft} sec.`}</Text>;
	},
);

import React, {
	useState,
	useEffect,
	useImperativeHandle,
	forwardRef,
} from 'react';
import { Text, TextStyle, StyleProp } from 'react-native';

interface ITimerProps {
	style?: StyleProp<TextStyle>;
}

export interface ITimerRef {
	startTimer: (seconds: number) => void;
}

export const Timer = forwardRef(({ style }: ITimerProps, ref: any) => {
	const [timeLeft, setTimeLeft] = useState(0);

	const startTimer = (seconds: number) => {
		setTimeLeft(seconds);
	};

	useImperativeHandle(ref, () => ({ startTimer }));

	useEffect(() => {
		if (!timeLeft) return;
		const intervalId = setInterval(() => {
			setTimeLeft(timeLeft - 1);
		}, 1000);
		return () => clearInterval(intervalId);
	}, [timeLeft, setTimeLeft]);

	return timeLeft ? <Text style={style}>{`${timeLeft} sec.`}</Text> : null;
});

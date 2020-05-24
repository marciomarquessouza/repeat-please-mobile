import React, { useState, useEffect } from 'react';
import { Text, TextStyle, StyleProp } from 'react-native';

interface ICountdowTimerProps {
	miliseconds: number;
	style?: StyleProp<TextStyle>;
	startTimer: boolean;
}

export const CountdownTimer = ({
	miliseconds,
	style,
	startTimer = false,
}: ICountdowTimerProps) => {
	const seconds = miliseconds / 1000;
	const [timeLeft, setTimeLeft] = useState(seconds - 1);

	useEffect(() => {
		if (!timeLeft || !startTimer) return;

		const intervalId = setInterval(() => {
			setTimeLeft(timeLeft - 1);
		}, 1000);

		return () => clearInterval(intervalId);
	}, [timeLeft, startTimer]);

	return <Text style={style}>{`${timeLeft} sec.`}</Text>;
};

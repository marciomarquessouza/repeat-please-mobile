import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { monkeyTryAgain } from '../../../../../assets/images';
import { styles } from './styles';

interface ITimeoutProps {
	onTimerFinish: () => void;
}

export const Timeout = ({ onTimerFinish }: ITimeoutProps) => {
	useEffect(() => {
		const timeoutID = setTimeout(() => {
			onTimerFinish();
		}, 3000);
		return () => clearInterval(timeoutID);
	}, [onTimerFinish]);
	return (
		<View style={styles.container}>
			<Image style={styles.monkeyFaceStyle} source={monkeyTryAgain} />
			<Text style={styles.messageStyle}>Timeout...</Text>
		</View>
	);
};

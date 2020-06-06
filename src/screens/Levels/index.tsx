import React, { useState, useEffect } from 'react';
import {
	Text,
	ScrollView,
	SafeAreaView,
	TouchableOpacity,
	Image,
	View,
} from 'react-native';
import { IPAType } from '../../types';
import { NavigationStackProp } from 'react-navigation-stack';
import { IPACard, LevelChoice } from '../../components';
import { playButton } from '../../../assets/images';
import { CHALLENGE } from '../../navigator/routes';
import { levels } from './levels';
import { LevelNameType } from '../../types';
import { styles } from './styles';
import Tts from 'react-native-tts';

type speechStatusType = 'waiting' | 'started' | 'finished' | 'cancelled';

interface ILevelsProps {
	navigation: NavigationStackProp;
}

export const Levels = ({ navigation }: ILevelsProps) => {
	const { symbol, type, examples }: IPAType = navigation.getParam('IPA');
	const [selected, setSelected] = useState<LevelNameType>('Chimp');
	const [speechStatus, setSpeechStatus] = useState<speechStatusType>('waiting');

	useEffect(() => {
		Tts.addEventListener('tts-start', () => setSpeechStatus('started'));
		Tts.addEventListener('tts-finish', () => setSpeechStatus('finished'));
		Tts.addEventListener('tts-cancel', () => setSpeechStatus('finished'));
	});

	const readText = async () => {
		Tts.stop();
		Tts.speak(examples.join(' '));
	};

	return (
		<ScrollView style={styles.container}>
			<SafeAreaView>
				<IPACard
					IPASymbol={symbol}
					stars={2}
					type={type}
					IPASound={readText}
					isLoading={speechStatus === 'started'}
				/>
				<Text style={styles.levelTitleStyle}>Select a Level</Text>
				<View style={styles.levelChoiceContainer}>
					<LevelChoice {...{ levels, selected, setSelected }} />
					<View style={styles.playButtonContainer}>
						<TouchableOpacity
							style={styles.playButtonStyle}
							onPress={() => navigation.navigate(CHALLENGE)}>
							<Image source={playButton} />
						</TouchableOpacity>
					</View>
				</View>
			</SafeAreaView>
		</ScrollView>
	);
};

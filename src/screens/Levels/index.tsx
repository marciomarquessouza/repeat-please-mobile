import React, { useState } from 'react';
import {
	Text,
	ScrollView,
	SafeAreaView,
	TouchableOpacity,
	Image,
	View,
} from 'react-native';
// import { IPAType } from '../../../types/ipa';
import { StackScreenProps } from '@react-navigation/stack';
import { IPACard, LevelChoice } from '../../components';
import { playButton } from '../../../assets/images';
import { CHALLENGE } from '../../navigator/routes';
import { levels } from './levels';
import { LevelNameType } from '../../../types/ipa';
import { styles } from './styles';
import useTextToSpeech from '../../hooks/useTextToSpeech';
import { RootStackParamList } from '../../navigator/interface';

type ILevelsProps = StackScreenProps<RootStackParamList, 'Levels'>;

export const Levels = ({ navigation }: ILevelsProps) => {
	// TODO take this information by redux state management
	// const { symbol, type, examples }: IPAType = navigation.getParam('IPA');
	const [selected, setSelected] = useState<LevelNameType>('Chimp');
	const [readText, statusTTS] = useTextToSpeech('LOVE');

	return (
		<ScrollView style={styles.container}>
			<SafeAreaView>
				<IPACard
					IPASymbol={'A'}
					stars={2}
					type={'consonant'}
					onAudioPressed={readText}
					loading={statusTTS === 'loading'}
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

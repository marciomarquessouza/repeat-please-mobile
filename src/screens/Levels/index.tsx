import React, { useState } from 'react';
import {
	Text,
	TouchableOpacity,
	View,
	ScrollView,
	SafeAreaView,
} from 'react-native';
import { IconsIPA } from 'repeat-please-styles';
import { IIPA } from '../../components';
import { NavigationStackProp } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { LevelChoice } from './LevelChoice';
import { styles } from './styles';
import { levelTypes } from '../../components/LevelIcons';

interface ILevelsProps {
	navigation: NavigationStackProp;
}

export const Levels = ({ navigation }: ILevelsProps) => {
	const { symbol, type }: IIPA = navigation.getParam('IPA');
	const [level, setLevel] = useState<levelTypes>('beginner');

	return (
		<ScrollView>
			<SafeAreaView>
				<View style={styles.headerContainer}>
					<View style={styles.iconIPAContainer}>
						<IconsIPA {...{ symbol, type }} />
					</View>
					<View style={styles.phoneticDetails}>
						<View style={styles.typeContainer}>
							<Text>{type.toUpperCase()}</Text>
						</View>
						<View style={styles.audioContainer}>
							<Icon name="ios-volume-high" size={50} />
						</View>
						<View style={styles.scoreContainer}>
							<View style={styles.starsContainer}>
								<Icon name="ios-star" size={25} style={styles.starStyle} />
								<Icon name="ios-star" size={25} style={styles.starStyle} />
								<Icon
									name="ios-star-outline"
									size={25}
									style={styles.starStyle}
								/>
							</View>
							<Text>Good</Text>
						</View>
					</View>
				</View>
				<View>
					<LevelChoice {...{ level, setLevel }} />
				</View>
			</SafeAreaView>
			<View style={styles.bottomContainer}>
				<TouchableOpacity
					onPress={() => navigation.navigate('VoiceSpeechAndroid')}
					style={styles.buttonStartContainer}>
					<Icon name="ios-play-circle" size={25} color="#fff" />
					<Text style={styles.buttonStartTextStyle}>START NOW</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

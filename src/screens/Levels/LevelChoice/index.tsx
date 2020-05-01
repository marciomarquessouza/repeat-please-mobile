import React from 'react';
import { View, Text } from 'react-native';
import { LevelIcons, levelTypes } from '../../../components/LevelIcons';
import { styles } from '../styles';

interface ILevelChoiceProps {
	level: levelTypes;
	setLevel: (level: levelTypes) => void;
}

export const LevelChoice = ({ level, setLevel }: ILevelChoiceProps) => (
	<View style={styles.levelArcContainer}>
		<View style={styles.levelArcStyle}>
			<View style={styles.titleContainer}>
				<Text style={styles.titleStyle}>Levels</Text>
			</View>
			<View style={[styles.levelIconContainer]}>
				<LevelIcons
					level="beginner"
					onPress={() => setLevel('beginner')}
					style={[
						styles.levelIconStyle,
						{ opacity: level === 'beginner' ? 1 : 0.5 },
					]}
				/>
				<LevelIcons
					level="advanced"
					onPress={() => setLevel('advanced')}
					style={[
						styles.levelIconStyle,
						{ opacity: level === 'advanced' ? 1 : 0.5 },
					]}
				/>
				<LevelIcons
					level="hardcore"
					onPress={() => setLevel('hardcore')}
					style={[
						styles.levelIconStyle,
						{ opacity: level === 'hardcore' ? 1 : 0.5 },
					]}
				/>
			</View>
		</View>
	</View>
);

import React from 'react';
import {
	View,
	Text,
	TouchableWithoutFeedback,
	TouchableOpacity,
	Image,
	ViewStyle,
	ImageSourcePropType,
} from 'react-native';
import { playButton } from '../../../assets/images';
import { SemiCircle } from './SVG/SemiCircle';
import { styles } from './style';

export type LevelType = {
	icon: ImageSourcePropType;
	name: string;
	description: string;
	levelChoice: (level: string) => void;
	color: string;
};

interface ILevelChoiceProps {
	style?: ViewStyle;
	levels: LevelType[];
	onPress?: () => void;
}

export const LevelChoice = ({ levels, style, onPress }: ILevelChoiceProps) => {
	return (
		<View style={[styles.container, style]}>
			<View style={styles.levelsContainer}>
				{levels.map(level => (
					<View style={styles.levelRow}>
						<Image source={level.icon} style={styles.iconStyle} />
						<View>
							<Text style={styles.levelNameStyle}>{level.name}</Text>
							<Text style={styles.levelDescriptionStyle}>
								{level.description}
							</Text>
						</View>
						<TouchableWithoutFeedback onPress={() => level.levelChoice}>
							<View style={styles.checkBoxContainer}>
								<View
									style={[
										styles.checkboxStyle,
										{ backgroundColor: level.color },
									]}
								/>
							</View>
						</TouchableWithoutFeedback>
					</View>
				))}
			</View>
			<View style={styles.semiCircleContainer}>
				<SemiCircle />
				<TouchableOpacity style={styles.playButtonStyle} onPress={onPress}>
					<Image source={playButton} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

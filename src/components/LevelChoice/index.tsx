import React from 'react';
import {
	View,
	Text,
	Image,
	ViewStyle,
	ImageSourcePropType,
	TouchableWithoutFeedback,
} from 'react-native';
import { SemiCircle } from './SVG/SemiCircle';
import { LevelNameType } from '../../types';
import { styles } from './style';
import { CheckButton } from '../CheckButton';

export type LevelType = {
	icon: ImageSourcePropType;
	name: LevelNameType;
	description: string;
	color: string;
};

interface ILevelChoiceProps {
	style?: ViewStyle;
	levels: LevelType[];
	selected: LevelNameType;
	setSelected: (level: LevelNameType) => void;
}

export const LevelChoice = ({
	levels,
	style,
	selected,
	setSelected,
}: ILevelChoiceProps) => {
	return (
		<View style={[styles.container, style]}>
			<View style={styles.levelsContainer}>
				{levels.map((level, index) => (
					<TouchableWithoutFeedback
						onPress={() => setSelected(level.name)}
						key={index}>
						<View style={styles.levelRow}>
							<Image source={level.icon} style={styles.iconStyle} />
							<View>
								<Text style={styles.levelNameStyle}>{level.name}</Text>
								<Text style={styles.levelDescriptionStyle}>
									{level.description}
								</Text>
							</View>
							<View style={styles.checkBoxContainer}>
								<CheckButton
									color={level.color}
									isChecked={selected === level.name}
								/>
							</View>
						</View>
					</TouchableWithoutFeedback>
				))}
			</View>
			<View style={styles.semiCircleContainer}>
				<SemiCircle />
			</View>
		</View>
	);
};

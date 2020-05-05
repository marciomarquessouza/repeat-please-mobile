import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Image,
	ViewStyle,
	ImageSourcePropType,
} from 'react-native';

type Level = {
	icon: ImageSourcePropType;
	name: string;
	description: string;
	levelChoice: (level: string) => void;
};

interface ILevelChoiceProps {
	style: ViewStyle;
	levels: Level[];
}

export const LevelChoice = ({ levels, style }: ILevelChoiceProps) => {
	return (
		<View style={[styles.container, style]}>
			<View>
				{levels.map(level => (
					<View>
						<Image source={level.icon} />
						<View>
							<Text>{level.name}</Text>
							<Text>{level.description}</Text>
						</View>
						<View>
							<TouchableOpacity onPress={() => level.levelChoice(level.name)}>
								<View />
							</TouchableOpacity>
						</View>
					</View>
				))}
			</View>
		</View>
	);
};

export const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		borderRadius: 30,
	},
});

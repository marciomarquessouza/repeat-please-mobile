import React from 'react';
import {
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	ViewStyle,
} from 'react-native';
import { chimp, caesar, monkeyKing, kingKong } from '../../../assets/images';

export type levelTypes = 'beginner' | 'medium' | 'advanced' | 'hardcore';

export interface ILevelIconsProps {
	level: levelTypes;
	style?: ViewStyle | ViewStyle[];
	onPress: () => void;
}

export const LevelIcons = ({ level, style, onPress }: ILevelIconsProps) => {
	const levelData = {
		beginner: {
			image: chimp,
			label: 'Chimp (Beginner)',
		},
		medium: {
			image: caesar,
			label: 'Caesar (Medium)',
		},
		advanced: {
			image: monkeyKing,
			label: 'Monkey King (Advanced)',
		},
		hardcore: {
			image: kingKong,
			label: 'King Kong (Hardcore)',
		},
	};

	return (
		<TouchableOpacity {...{ onPress }}>
			<View style={[styles.container, style]}>
				<View style={styles.imageContainer}>
					<Image source={levelData[level].image} />
				</View>
				<View style={styles.labelContainer}>
					<Text style={styles.labelStyle}>{levelData[level].label}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	imageContainer: {
		backgroundColor: '#fff',
		width: 90,
		height: 90,
		borderRadius: 45,
		justifyContent: 'center',
		alignItems: 'center',
	},
	labelContainer: {
		width: 90,
		marginTop: 5,
	},
	labelStyle: {
		fontSize: 14,
		fontWeight: 'bold',
		flexWrap: 'wrap',
		textAlign: 'center',
	},
});

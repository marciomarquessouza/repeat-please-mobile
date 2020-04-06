import React from 'react';
import {
	ActivityIndicator,
	Image,
	ImageSourcePropType,
	StyleSheet,
	TouchableOpacity,
	View,
	ViewStyle,
} from 'react-native';

interface IIconButtonProps {
	onPress?: () => void;
	isLoading?: boolean;
	source: ImageSourcePropType;
	style?: ViewStyle;
}

export const IconButton = ({
	onPress,
	isLoading,
	source,
	style,
}: IIconButtonProps) => (
	<TouchableOpacity {...{ onPress }}>
		<View style={[styles.buttonContainer, style]}>
			{isLoading ? (
				<ActivityIndicator size="small" />
			) : (
				<Image {...{ source }} />
			)}
		</View>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	buttonContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
});

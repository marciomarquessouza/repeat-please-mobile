import React from 'react';
import {
	ActivityIndicator,
	Image,
	ImageSourcePropType,
	StyleSheet,
	TouchableOpacity,
	View,
	StyleProp,
	ViewStyle,
} from 'react-native';
import * as assetsIcons from '../../../assets/images';

interface IIconButtonProps {
	onPress?: () => void;
	isLoading?: boolean;
	spinnerSize?: number | 'small' | 'large';
	name?: assetsIcons.IconNameType;
	source?: ImageSourcePropType;
	style?: StyleProp<ViewStyle>;
	disabled?: boolean;
}

export const IconButton = ({
	onPress,
	isLoading,
	source,
	spinnerSize = 'small',
	name = 'arrowRight',
	style,
	disabled,
}: IIconButtonProps) => (
	<TouchableOpacity {...{ onPress, disabled }}>
		<View style={[styles.buttonContainer, style]}>
			{isLoading ? (
				<ActivityIndicator size={spinnerSize} />
			) : (
				<Image
					source={source || assetsIcons[name]}
					style={{ opacity: disabled ? 0.5 : 1 }}
				/>
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

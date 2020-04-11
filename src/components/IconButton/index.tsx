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
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface IIconButtonProps {
	onPress?: () => void;
	isLoading?: boolean;
	source: ImageSourcePropType;
	style?: ViewStyle;
	width?: number;
	height?: number;
}

export const IconButton = ({
	onPress,
	isLoading,
	source,
	style,
	width,
	height,
}: IIconButtonProps) => (
	<TouchableOpacity {...{ onPress }}>
		<View style={[styles.buttonContainer, style]}>
			{isLoading ? (
				<ActivityIndicator size="small" />
			) : (
				<Image
					{...{
						source,
						style: {
							width: width || wp('9%'),
							height: height || wp('9%'),
						},
					}}
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

import React from 'react';
import {
	Image,
	StyleSheet,
	TouchableOpacity,
	View,
	ViewStyle,
} from 'react-native';
import { mailMonkey, arrowRight } from '../../../../../assets/images';
import { Title, PlaceholderInput } from 'repeat-please-styles';

export interface IEmailProps {
	placeholder: string;
	onPress: () => void;
	onChangeText: (text: string) => void;
	width: number;
	style?: ViewStyle;
}

export const Email = ({
	placeholder,
	onPress,
	onChangeText,
	width,
	style,
}: IEmailProps) => (
	<View style={[styles.container, style, { width }]}>
		<View style={styles.headerContainer}>
			<Image source={mailMonkey} style={styles.imageStyle} />
			<Title>Your Email</Title>
		</View>
		<View style={styles.inputContainer}>
			<PlaceholderInput
				{...{
					placeholder,
					onChangeText,
					keyboardType: 'email-address',
					autoCapitalize: 'none',
					autoCorrect: false,
					onSubmitEditing: onPress,
				}}
			/>
			<TouchableOpacity {...{ onPress }}>
				<Image source={arrowRight} />
			</TouchableOpacity>
		</View>
	</View>
);

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		paddingHorizontal: 60,
	},
	headerContainer: {
		paddingBottom: 10,
		alignItems: 'center',
	},
	imageStyle: {
		marginBottom: 10,
	},
	inputContainer: {
		flexDirection: 'row',
	},
});

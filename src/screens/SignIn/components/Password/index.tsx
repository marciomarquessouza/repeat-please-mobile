import React, { useState } from 'react';
import { Image, View, ViewStyle, Text } from 'react-native';
import {
	passwordHide,
	passwordShown,
	monkeyCloseEyes,
	monkeyOpenEyes,
	submit,
} from '../../../../../assets/images';
import { PlaceholderInput } from 'repeat-please-styles';
import { IconButton } from '../../../../components';
import { styles } from './style';

export interface IPasswordProps {
	placeholder: string;
	onPress: () => void;
	onChangeText: (text: string) => void;
	width: number;
	style?: ViewStyle;
	isLoading?: boolean;
}

export const Password = ({
	placeholder,
	onPress,
	onChangeText,
	width,
	style,
	isLoading,
}: IPasswordProps) => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<View style={[styles.container, style, { width }]}>
			<View style={styles.headerContainer}>
				<Image
					source={showPassword ? monkeyOpenEyes : monkeyCloseEyes}
					style={[styles.imageStyle]}
				/>
				<Text style={styles.titleStyle}>Your Password</Text>
			</View>
			<View style={styles.inputContainer}>
				<IconButton
					onPress={() => setShowPassword(!showPassword)}
					source={showPassword ? passwordShown : passwordHide}
				/>
				<PlaceholderInput
					{...{
						placeholder,
						onChangeText,
						secureTextEntry: !showPassword,
						autoCapitalize: 'none',
						autoCorrect: false,
						onSubmitEditing: onPress,
						returnKeyType: 'done',
					}}
				/>
				<IconButton
					{...{
						onPress,
						source: submit,
						isLoading,
						style: styles.buttonStyle,
					}}
				/>
			</View>
		</View>
	);
};

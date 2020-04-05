import React, { useState } from 'react';
import {
	ActivityIndicator,
	Image,
	StyleSheet,
	TouchableOpacity,
	View,
	ViewStyle,
} from 'react-native';
import {
	passwordHide,
	passwordShown,
	monkeyCloseEyes,
	monkeyOpenEyes,
	submit,
} from '../../../../../assets/images';
import { Title, PlaceholderInput } from 'repeat-please-styles';

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
					width={160}
					height={172}
					style={styles.imageStyle}
				/>
				<Title>Your Password</Title>
			</View>
			<View style={styles.inputContainer}>
				<TouchableOpacity
					{...{ onPress: () => setShowPassword(!showPassword) }}>
					<Image source={showPassword ? passwordHide : passwordShown} />
				</TouchableOpacity>
				<PlaceholderInput
					{...{
						placeholder,
						onChangeText,
						secureTextEntry: !showPassword,
						autoCapitalize: 'none',
						autoCorrect: false,
						onKeyPress: onPress,
					}}
				/>
				<TouchableOpacity {...{ onPress }}>
					{isLoading ? (
						<ActivityIndicator size="small" />
					) : (
						<Image source={submit} />
					)}
				</TouchableOpacity>
			</View>
		</View>
	);
};

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

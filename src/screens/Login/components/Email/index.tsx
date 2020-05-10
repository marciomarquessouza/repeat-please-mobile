import React from 'react';
import { Image, View, ViewStyle } from 'react-native';
import { mailMonkey, arrowRight } from '../../../../../assets/images';
import { Title, PlaceholderInput } from 'repeat-please-styles';
import { IconButton } from '../../../../components';
import { styles } from './style';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

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
			<Image
				source={mailMonkey}
				style={styles.imageStyle}
				width={hp('24.4%')}
				height={hp('14.8%')}
			/>
			<Title>Your Email</Title>
		</View>
		<View style={styles.inputContainer}>
			<View style={styles.inputStyle}>
				<PlaceholderInput
					{...{
						placeholder,
						onChangeText,
						keyboardType: 'email-address',
						autoCapitalize: 'none',
						autoCorrect: false,
						onSubmitEditing: onPress,
						returnKeyType: 'next',
					}}
				/>
			</View>
			<IconButton source={arrowRight} onPress={onPress} />
		</View>
	</View>
);

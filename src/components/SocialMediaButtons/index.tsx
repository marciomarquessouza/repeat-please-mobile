import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { ButtonTransparent } from 'repeat-please-styles';

export interface ISocialMediaButtonsProps {
	customStyle?: StyleProp<ViewStyle>;
	handleFacebookSubmit?: () => void;
	handleGoogleSubmit?: () => void;
}

export const SocialMediaButtons = ({
	customStyle,
	handleFacebookSubmit,
	handleGoogleSubmit,
}: ISocialMediaButtonsProps): JSX.Element => (
	<>
		<ButtonTransparent customStyle={customStyle} onPress={handleFacebookSubmit}>
			Loging with Facebook
		</ButtonTransparent>
		<ButtonTransparent customStyle={customStyle} onPress={handleGoogleSubmit}>
			Loging with Google
		</ButtonTransparent>
	</>
);

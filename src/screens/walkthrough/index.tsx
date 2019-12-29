import React from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { goToScreen, INavigate } from '../../navigator/helper';
import { ButtonRounded, Logo, TitleLogo } from 'repeat-please-styles';
import { LOGIN, REGISTER } from '../../navigator/routes';
import { styles } from './style';

export interface IWalkthroughProps {
	navigation: INavigate;
}

export const Walkthrough = ({ navigation }: IWalkthroughProps): JSX.Element => {
	return (
		<View style={styles.Container} data-test="walkthrough">
			<Logo />
			<TitleLogo />
			<ButtonRounded
				customStyle={styles.ButtonStyle}
				onPress={() => goToScreen(navigation, REGISTER)}>
				Register
			</ButtonRounded>
			<ButtonRounded
				customStyle={styles.ButtonStyle}
				onPress={() => goToScreen(navigation, LOGIN)}>
				Login
			</ButtonRounded>
		</View>
	);
};

export default withNavigation(Walkthrough);

import React from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { goToScreen } from '../../navigator/helper';
import { NavigationStackProp } from 'react-navigation-stack';
import { ButtonRounded, Logo, TitleLogo } from 'repeat-please-styles';
import { LOGIN, REGISTER } from '../../navigator/routes';
import { styles } from './style';

interface IWalkthroughProps {
	navigation: NavigationStackProp;
}

const Walkthrough = ({ navigation }: IWalkthroughProps): JSX.Element => {
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

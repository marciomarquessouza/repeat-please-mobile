import React, { Component } from 'react';
import { View } from 'react-native';
import {
	ButtonRounded,
	ButtonTransparent,
	TitleLogo,
	PlaceholderInput,
} from 'repeat-please-styles';
import { navigationOptionsDefault } from '../../navigator/helper';
import { styles } from './styles';

export class Register extends Component<{}, {}> {
	static navigationOptions = navigationOptionsDefault;

	render() {
		return (
			<View style={styles.container} data-test="register">
				<TitleLogo />
				<View style={styles.formStyle}>
					<PlaceholderInput placeholder="Name or NickName" />
					<PlaceholderInput placeholder="Email" keyboardType="email-address" />
					<PlaceholderInput placeholder="Password" secureTextEntry />
					<PlaceholderInput placeholder="Confirm Password" secureTextEntry />
				</View>
				<ButtonRounded customStyle={styles.buttonStyle}>Register</ButtonRounded>
				<ButtonTransparent customStyle={styles.buttonStyle}>
					Loging with Facebook
				</ButtonTransparent>
				<ButtonTransparent customStyle={styles.buttonStyle}>
					Loging with Google
				</ButtonTransparent>
			</View>
		);
	}
}

export default Register;

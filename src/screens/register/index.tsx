import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import {
	ButtonRounded,
	ButtonTransparent,
	MessageWarning,
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
				<ScrollView contentContainerStyle={styles.scrollStyle}>
					<View style={styles.wrapper}>
						<View style={styles.logoContainer}>
							<TitleLogo />
						</View>
						<View style={styles.formStyle}>
							<PlaceholderInput placeholder="Name or NickName" />
							<PlaceholderInput
								placeholder="Email"
								keyboardType="email-address"
							/>
							<PlaceholderInput placeholder="Password" secureTextEntry />
							<PlaceholderInput
								placeholder="Confirm Password"
								secureTextEntry
							/>
							<MessageWarning customStyle={styles.messageStyle}>
								Register error
							</MessageWarning>
						</View>
						<ButtonRounded customStyle={styles.buttonStyle}>
							Register
						</ButtonRounded>
						<View>
							<ButtonTransparent customStyle={styles.buttonStyle}>
								Loging with Facebook
							</ButtonTransparent>
							<ButtonTransparent customStyle={styles.buttonStyle}>
								Loging with Google
							</ButtonTransparent>
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}

export default Register;

import React, { useState } from 'react';
import { Animated, Dimensions, View } from 'react-native';
import { Email, Password } from '../';
import { HeaderBackArrow } from '../../../../navigator/HeaderBackArrow';
import { styles } from './style';
import { NavigationStackProp } from 'react-navigation-stack';

interface ILoginFormProps {
	onEmailSubmit: () => boolean;
	onEmailChange: (text: string) => void;
	onPassSubmit: () => void;
	onPassChange: (text: string) => void;
	navigation: NavigationStackProp;
	isLoading: boolean;
}

const WIDTH = Dimensions.get('window').width;

let page: 'email' | 'password' = 'email';

enum DIRECTION {
	right = -WIDTH,
	left = 0,
}

export const LoginForm = ({
	onEmailSubmit,
	onEmailChange,
	onPassSubmit,
	onPassChange,
	isLoading,
	navigation,
}: ILoginFormProps): JSX.Element => {
	const [position] = useState(new Animated.ValueXY({ x: 0, y: 0 }));

	const loginAnimation = (
		animatedObject: Animated.ValueXY,
		direction: DIRECTION,
	): void => {
		Animated.timing(animatedObject, {
			toValue: { x: direction, y: 0 },
			duration: 500,
		}).start();
	};

	const goToEmail = (): void => {
		loginAnimation(position, DIRECTION.left);
		page = 'email';
	};

	const gotToPassword = (): void => {
		loginAnimation(position, DIRECTION.right);
		page = 'password';
	};

	const goBack = (): void => {
		page === 'password' ? goToEmail() : navigation.goBack();
	};

	return (
		<View style={styles.container}>
			<View style={styles.backArrowStyle}>
				<HeaderBackArrow onPress={goBack} />
			</View>
			<View style={styles.animationContainer}>
				<Animated.View
					style={{ position: 'absolute', top: 0, left: position.x }}>
					<Email
						placeholder="Email Address"
						onChangeText={email => onEmailChange(email)}
						onPress={() => onEmailSubmit() && gotToPassword()}
						width={WIDTH}
						style={{ position: 'absolute', top: 0, left: 0 }}
					/>
					<Password
						placeholder="Password"
						onChangeText={password => onPassChange(password)}
						onPress={onPassSubmit}
						width={WIDTH}
						style={{ position: 'absolute', top: 0, left: WIDTH }}
						isLoading={isLoading}
					/>
				</Animated.View>
			</View>
		</View>
	);
};

import React, { useState } from 'react';
import { Animated, Dimensions, View } from 'react-native';
import { Email } from '../Email';
import { Password } from '../Password';
import { HeaderBackArrow } from '../../../../navigator/HeaderBackArrow';
import { styles } from './style';
import { NavigationStackProp } from 'react-navigation-stack';
import { timingAnimation } from '../../../../utils/animations';
import { useTranslation } from 'react-i18next';

interface ILoginFormProps {
	onEmailSubmit: () => boolean;
	onEmailChange: (text: string) => void;
	onPassSubmit: () => void;
	onPassChange: (text: string) => void;
	navigation: NavigationStackProp;
	isLoading: boolean;
}

const WIDTH = Dimensions.get('window').width;

const SPEED = 500;

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
	const { t } = useTranslation();

	const goToEmail = (): void => {
		timingAnimation(position, { x: DIRECTION.left, y: 0 }, SPEED).start();
		page = 'email';
	};

	const gotToPassword = (): void => {
		timingAnimation(position, { x: DIRECTION.right, y: 0 }, SPEED).start();
		page = 'password';
	};

	const goBack = (): void => {
		page === 'password' ? goToEmail() : navigation.goBack();
	};

	return (
		<View style={[styles.container]}>
			<View style={styles.backArrowContainer}>
				<HeaderBackArrow onPress={goBack} />
			</View>
			<View style={styles.animationContainer}>
				<Animated.View
					style={{
						position: 'absolute',
						top: 0,
						bottom: 0,
						left: 0,
						width: '200%',
						transform: [{ translateX: position.x }],
					}}>
					<Email
						placeholder={t('email')}
						onChangeText={email => onEmailChange(email)}
						onPress={() => onEmailSubmit() && gotToPassword()}
						width={WIDTH}
						style={{ position: 'absolute', top: 0, left: 0 }}
					/>
					<Password
						placeholder={t('password')}
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

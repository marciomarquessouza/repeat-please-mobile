import React from 'react';
import { WALKTHROUGH } from '../../navigator/routes';
import { NavigationStackProp } from 'react-navigation-stack';
import { View } from 'react-native';
import { Slide } from 'repeat-please-styles';

export interface ISlidesProps {
	navigation: NavigationStackProp;
}

const slidesContent = [
	{
		title: 'PRONUNCIATION?',
		text:
			'Pronunciation is a problem for you? You can improve it with Repeat Pelase!',
	},
	{
		title: 'HARD WORK!',
		text:
			'No magic here! You wil have all tools to follow your progress and identify and improve your pronunciation weakeness.',
	},
	{
		title: 'PATH TO SUCCESS!',
		text: "No more time to left. Let's start now!",
	},
];

export const Slides = ({ navigation }: ISlidesProps): JSX.Element => {
	const nextScreen = () => navigation.navigate(WALKTHROUGH);
	const duration = 800;
	return (
		<View style={{ flex: 1 }} data-test="slidesComponent">
			<Slide {...{ slidesContent, nextScreen, duration }} />
		</View>
	);
};

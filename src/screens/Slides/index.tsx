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
		header: <Slide.Logo />,
		footer: (
			<Slide.Footer text="Pronunciation is a problem for you? You can improve it with Repeat Pelase! " />
		),
	},
	{
		header: <Slide.Header title="HARD WORK!" />,
		footer: (
			<Slide.Footer text="No magic here! You wil have all tools to follow your progress and identify and improve your pronunciation weekeness." />
		),
	},
	{
		header: <Slide.Header title="PATH TO SUCCESS!" />,
		footer: (
			<Slide.Footer text="No magic here! You wil have all tools to follow your progress and identify and improve your pronunciation weekeness." />
		),
	},
];

export const Slides = ({ navigation }: ISlidesProps): JSX.Element => {
	const nextScreen = () => navigation.navigate(WALKTHROUGH);
	const duration = 800;
	return (
		<View style={{ flex: 1 }} data-test="slidesComponent">
			<Slide {...{ slides: slidesContent, nextScreen, duration }} />
		</View>
	);
};

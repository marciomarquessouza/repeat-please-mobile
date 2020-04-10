import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { WALKTHROUGH } from '../../navigator/routes';
import { NavigationStackProp } from 'react-navigation-stack';
import { Slide, color } from 'repeat-please-styles';

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
		<SafeAreaView style={styles.container} data-test="slidesComponent">
			<Slide {...{ slides: slidesContent, nextScreen, duration }} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: color.background,
	},
});

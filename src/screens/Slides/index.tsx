import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { WALKTHROUGH } from '../../navigator/routes';
import { NavigationStackProp } from 'react-navigation-stack';
import { Slide, color } from 'repeat-please-styles';
import { useTranslation } from 'react-i18next';

export interface ISlidesProps {
	navigation: NavigationStackProp;
}

export const Slides = ({ navigation }: ISlidesProps) => {
	const { t } = useTranslation();

	const slidesContent = [
		{
			header: <Slide.Logo />,
			footer: <Slide.Footer text={t('slide01')} />,
		},
		{
			header: <Slide.Header title={t('slide02Title')} />,
			footer: <Slide.Footer text={t('slide02')} />,
		},
		{
			header: <Slide.Header title={t('slide03Title')} />,
			footer: <Slide.Footer text={t('slide03')} />,
		},
	];
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

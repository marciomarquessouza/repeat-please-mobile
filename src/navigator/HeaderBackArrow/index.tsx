import React from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { BackArrow } from '../../components/BackArrow';
import { NavigationStackProp } from 'react-navigation-stack';
import { color } from 'repeat-please-styles';

export interface IHeaderBackArrow {
	navigation: NavigationStackProp;
}

export const HeaderBackArrow = ({
	navigation,
}: IHeaderBackArrow): JSX.Element => {
	return (
		<SafeAreaView data-test="backArrow">
			<View style={styles.container}>
				<TouchableOpacity onPress={() => navigation.pop()}>
					<BackArrow />
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: color.background,
		padding: 20,
	},
});

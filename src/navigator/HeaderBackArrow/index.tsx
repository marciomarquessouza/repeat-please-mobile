import React from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { BackArrow } from '../../components/BackArrow';
import { color } from 'repeat-please-styles';

export interface IHeaderBackArrow {
	onPress: () => void;
}

export const HeaderBackArrow = ({ onPress }: IHeaderBackArrow): JSX.Element => {
	return (
		<SafeAreaView data-test="backArrow">
			<View style={styles.container}>
				<TouchableOpacity {...{ onPress }}>
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

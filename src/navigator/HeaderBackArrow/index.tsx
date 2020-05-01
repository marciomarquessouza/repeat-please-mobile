import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { BackArrow } from '../../components/BackArrow';
import { color } from 'repeat-please-styles';

export interface IHeaderBackArrow {
	onPress: () => void;
}

export const HeaderBackArrow = ({ onPress }: IHeaderBackArrow): JSX.Element => {
	return (
		<View style={styles.container} data-test="backArrow">
			<TouchableOpacity {...{ onPress }}>
				<BackArrow />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: color.background,
		paddingHorizontal: 10,
		paddingBottom: 2,
	},
});

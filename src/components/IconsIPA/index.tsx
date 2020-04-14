import React from 'react';
import { Text, FlatList, View, StyleSheet } from 'react-native';
import { IconsIPA } from 'repeat-please-styles';

interface IIconsIPAProps {
	IPAList: {
		symbol: string;
		type: 'vowel' | 'consonant';
		examples: string[];
	}[];
}

export const IconIPA = ({ IPAList }: IIconsIPAProps) => (
	<FlatList
		horizontal
		showsHorizontalScrollIndicator={false}
		data={Object.values(IPAList)}
		keyExtractor={IPA => IPA.symbol}
		renderItem={({ item: { symbol, type, examples } }) => (
			<View style={styles.symbolContainer}>
				<IconsIPA {...{ symbol, type }} />
				<View style={styles.examplesContainer}>
					<Text style={styles.exampleStyle}>{examples.join(', ')}</Text>
				</View>
			</View>
		)}
	/>
);

const styles = StyleSheet.create({
	symbolContainer: {
		marginHorizontal: 12,
		marginVertical: 8,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	examplesContainer: {
		alignItems: 'center',
		marginVertical: 6,
		flex: 1,
	},
	exampleStyle: {
		fontSize: 12,
		flexWrap: 'wrap',
	},
});

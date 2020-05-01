import React from 'react';
import {
	Text,
	FlatList,
	View,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import { IconsIPA } from 'repeat-please-styles';

export interface IIPA {
	symbol: string;
	type: 'vowel' | 'consonant';
	examples: string[];
}

export interface IIconsIPAProps {
	list: IIPA[];
	onPress: (IPA: IIPA) => void;
}

export const IPAList = ({ list, onPress }: IIconsIPAProps) => (
	<FlatList
		horizontal
		showsHorizontalScrollIndicator={false}
		data={Object.values(list)}
		keyExtractor={IPA => IPA.symbol}
		renderItem={({ item: { symbol, type, examples } }) => (
			<TouchableOpacity onPress={() => onPress({ symbol, type, examples })}>
				<View style={styles.symbolContainer}>
					<IconsIPA {...{ symbol, type }} />
					<View style={styles.examplesContainer}>
						<Text style={styles.exampleStyle}>{examples.join(', ')}</Text>
					</View>
				</View>
			</TouchableOpacity>
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

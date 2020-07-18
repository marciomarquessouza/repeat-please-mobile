import React from 'react';
import { Text, FlatList, View, TouchableOpacity } from 'react-native';
import { IconsIPA } from 'repeat-please-styles';
import { IPAType } from '../../../types/ipa';
import { styles } from './styles';

export interface IIconsIPAProps {
	list: IPAType[];
	onPress: (IPA: IPAType) => void;
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

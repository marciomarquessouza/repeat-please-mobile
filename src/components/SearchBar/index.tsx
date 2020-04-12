import React from 'react';
import { View } from 'react-native';
import { PlaceholderInput } from 'repeat-please-styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './style';

export const SearchBar = (): JSX.Element => {
	return (
		<View style={styles.container}>
			<View style={styles.searchContainer}>
				<View style={styles.formContainer}>
					<View style={styles.iconStyle}>
						<Icon name="ios-search" size={25} color="#000" />
					</View>
					<View style={styles.inputStyle}>
						<PlaceholderInput
							placeholder="Search for Words or Phonetic"
							returnKeyType="search"
						/>
					</View>
				</View>
			</View>
		</View>
	);
};

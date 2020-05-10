import React from 'react';
import { View, Text } from 'react-native';
import { IconButton } from '../../components';
import { styles } from './styles';

export const Challenge = () => {
	return (
		<View style={styles.container}>
			<View style={styles.arcContainer}>
				<Text style={styles.repeatWordStyle}>TASK</Text>
				<Text style={styles.ipaStyle}>tæsk</Text>
				<View style={styles.panelContainer}>
					<IconButton name="repeat" style={styles.panelIconStyle} />
					<IconButton
						name="mic"
						style={[styles.panelIconStyle, styles.micIconStyle]}
					/>
					<IconButton name="skip" style={styles.panelIconStyle} />
				</View>
			</View>
		</View>
	);
};

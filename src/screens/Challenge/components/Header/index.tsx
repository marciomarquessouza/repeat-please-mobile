import React from 'react';
import { View, Text } from 'react-native';
import { IconButton } from '../../../../components';
import { styles } from '../../styles';

interface IHeaderProps {
	onPressRepeat: () => void;
	onPressStart: () => void;
	onPressSkip: () => void;
}

export const Header = ({
	onPressRepeat,
	onPressStart,
	onPressSkip,
}: IHeaderProps) => (
	<View style={styles.arcContainer}>
		<Text style={styles.repeatWordStyle}>TASK</Text>
		<Text style={styles.ipaStyle}>tæsk</Text>
		<View style={styles.panelContainer}>
			<IconButton
				name="repeat"
				style={styles.panelIconStyle}
				onPress={onPressRepeat}
			/>
			<IconButton
				name="mic"
				style={[styles.panelIconStyle, styles.micIconStyle]}
				onPress={onPressStart}
			/>
			<IconButton
				name="skip"
				style={styles.panelIconStyle}
				onPress={onPressSkip}
			/>
		</View>
	</View>
);

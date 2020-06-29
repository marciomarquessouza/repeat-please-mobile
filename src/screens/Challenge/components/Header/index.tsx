import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { IconButton } from '../../../../components';
import { MicIcon } from './SVG/MicIcon';
import { styles } from '../../styles';

interface IHeaderProps {
	onPressRepeat: () => void;
	onPressStart: () => void;
	onPressSkip: () => void;
	disabled?: boolean;
	highlight?: boolean;
}

export const Header = ({
	onPressRepeat,
	onPressStart,
	onPressSkip,
	disabled,
	highlight = false,
}: IHeaderProps) => (
	<View style={styles.arcContainer}>
		<Text style={styles.repeatWordStyle}>TASK</Text>
		<Text style={styles.ipaStyle}>tæsk</Text>
		<View style={styles.panelContainer}>
			<IconButton
				name="repeat"
				style={styles.panelIconStyle}
				onPress={onPressRepeat}
				disabled={disabled}
			/>
			<TouchableOpacity
				style={[styles.panelIconStyle, styles.micIconStyle]}
				onPress={onPressStart}>
				<MicIcon color={highlight ? '#FF5733' : '#000'} />
			</TouchableOpacity>
			<IconButton
				name="skip"
				style={styles.panelIconStyle}
				onPress={onPressSkip}
				disabled={disabled}
			/>
		</View>
	</View>
);

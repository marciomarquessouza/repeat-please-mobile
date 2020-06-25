import React from 'react';
import { View, Text } from 'react-native';
import { IconButton } from '../../../../components';
import { styles } from '../../styles';

interface IHeaderProps {
	onPressRepeat: () => void;
	actionButton: React.ReactNode;
	onPressSkip: () => void;
	disabled?: boolean;
}

export const Header = ({
	onPressRepeat,
	actionButton,
	onPressSkip,
	disabled,
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
			{actionButton}
			<IconButton
				name="skip"
				style={styles.panelIconStyle}
				onPress={onPressSkip}
				disabled={disabled}
			/>
		</View>
	</View>
);

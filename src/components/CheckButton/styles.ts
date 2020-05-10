import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 25,
		height: 25,
		borderRadius: 12.5,
	},
	line1Style: {
		position: 'absolute',
		bottom: 5,
		left: 7,
		height: 3,
		width: 9,
		borderRadius: 1.5,
		backgroundColor: '#fff',
	},
	line2Style: {
		position: 'absolute',
		right: 9,
		bottom: 5,
		width: 3,
		height: 17,
		borderRadius: 1.5,
		backgroundColor: '#fff',
	},
});

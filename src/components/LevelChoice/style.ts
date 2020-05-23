import { StyleSheet } from 'react-native';
import { font } from 'repeat-please-styles';

export const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		borderRadius: 30,
		marginHorizontal: 14,
		marginTop: 10,
		marginBottom: 40,
	},
	levelsContainer: {
		flexDirection: 'column',
		paddingHorizontal: 26,
		paddingTop: 10,
	},
	levelRow: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 9,
		borderBottomWidth: 1,
		borderBottomColor: '#D4C6C6',
	},
	iconStyle: {
		marginRight: 15,
	},
	levelNameStyle: {
		fontFamily: font.title,
		fontSize: 18,
	},
	levelDescriptionStyle: {
		fontSize: 16,
		color: '#656565',
	},
	checkBoxContainer: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'flex-end',
		justifyContent: 'center',
	},
	checkboxStyle: {
		position: 'absolute',
		height: 25,
		width: 25,
		borderRadius: 12.5,
	},
	semiCircleContainer: {
		alignItems: 'center',
		justifyContent: 'flex-end',
		height: 60,
	},
});

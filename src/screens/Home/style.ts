import { StyleSheet } from 'react-native';
import { color } from 'repeat-please-styles';

export const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: color.background,
	},
	scrollStyle: {
		backgroundColor: '#fff',
	},
	container: {
		backgroundColor: '#fff',
		flex: 1,
	},
	sectionTitleContainer: {
		marginTop: 10,
		marginHorizontal: 20,
	},
	sectionTitleStyle: {
		fontSize: 18,
		fontWeight: 'bold',
		lineHeight: 25,
	},
	sectionSubTitleStyle: {
		fontSize: 14,
		lineHeight: 25,
	},
	cardContainer: {
		marginHorizontal: 15,
		marginTop: 10,
	},
	listContainer: {
		marginHorizontal: 15,
		marginVertical: 10,
	},
});

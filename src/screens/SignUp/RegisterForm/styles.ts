import { StyleSheet } from 'react-native';
import { color } from 'repeat-please-styles';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: color.background,
	},
	titleStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	formContainer: {
		flex: 1,
		paddingVertical: 20,
		paddingHorizontal: 20,
	},
	inputContainer: {
		flex: 1,
		marginVertical: 10,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
	},
	iconStyle: {
		marginRight: 10,
		width: 25,
		height: 25,
	},
	scrollStyle: {
		flexGrow: 1,
	},
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	registerButtonStyle: {
		marginHorizontal: wp('4%'),
		marginVertical: hp('3%'),
	},
});

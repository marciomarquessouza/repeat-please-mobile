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
		paddingVertical: wp('3%'),
		paddingHorizontal: wp('8%'),
	},
	inputContainer: {
		flex: 1,
		marginVertical: wp('2%'),
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	iconStyle: {
		marginRight: wp('1.8%'),
		width: hp('3.2%'),
		height: hp('3.2%'),
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

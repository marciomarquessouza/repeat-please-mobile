import { StyleSheet } from 'react-native';
import { color } from 'repeat-please-styles';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: wp('18%'),
		backgroundColor: color.background,
	},
	searchContainer: {
		flex: 1,
		backgroundColor: '#fff',
		marginHorizontal: wp('3%'),
		marginVertical: hp('1.6%'),
		borderRadius: hp('1%'),
		justifyContent: 'center',
		alignItems: 'center',
	},
	formContainer: {
		flexDirection: 'row',
		paddingHorizontal: 10,

		justifyContent: 'center',
		alignItems: 'center',
	},
	iconStyle: {
		marginRight: wp('2%'),
	},
	inputStyle: {
		flex: 1,
		height: 28,
	},
});

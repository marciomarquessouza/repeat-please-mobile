import { StyleSheet } from 'react-native';
import { color } from 'repeat-please-styles';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: wp('20%'),
		backgroundColor: color.background,
	},
	searchContainer: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#fff',
		marginHorizontal: wp('3%'),
		marginVertical: hp('1.6%'),
		borderRadius: hp('1%'),
		paddingHorizontal: wp('3%'),
		paddingVertical: hp('0.6%'),
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	iconStyle: {
		marginRight: wp('2%'),
	},
	inputStyle: {
		flex: 1,
	},
});

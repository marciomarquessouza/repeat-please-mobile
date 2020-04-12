import { StyleSheet } from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		paddingHorizontal: wp('8%'),
	},
	headerContainer: {
		paddingBottom: 10,
		alignItems: 'center',
		justifyContent: 'flex-end',
		height: hp('29.5%'),
	},
	imageStyle: {
		marginBottom: hp('2%'),
	},
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	inputStyle: {
		flex: 1,
		paddingRight: 10,
	},
});

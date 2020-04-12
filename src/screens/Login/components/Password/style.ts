import { StyleSheet } from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		paddingHorizontal: wp('5%'),
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
		flexDirection: 'row',
		flex: 1,
		alignItems: 'center',
	},
	buttonStyle: {
		paddingHorizontal: 10,
	},
});

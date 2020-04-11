import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
	container: {
		width: '100%',
	},
	backArrowStyle: {
		width: '100%',
	},
	animationContainer: {
		height: hp('38%'),
		width: '100%',
	},
});

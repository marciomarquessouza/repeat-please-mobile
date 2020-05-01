import { Dimensions, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color, font } from 'repeat-please-styles';

const WIDTH = Dimensions.get('window').width;
const HEADER_HEIGHT = 200;
const MIDDLE_HEIGHT = 280;
const ARC_WIDTH = WIDTH * 0.5085 + WIDTH;

export const styles = StyleSheet.create({
	headerContainer: {
		height: HEADER_HEIGHT,
	},
	levelArcContainer: {
		width: WIDTH,
		height: MIDDLE_HEIGHT,
		overflow: 'hidden',
	},
	bottomContainer: {
		height: '100%',
		backgroundColor: color.background,
		paddingBottom: 20,
	},
	iconIPAContainer: {
		alignItems: 'center',
		marginTop: hp('3%'),
	},
	phoneticDetails: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		marginHorizontal: 20,
		marginTop: 30,
	},
	audioContainer: {
		marginHorizontal: 75,
	},
	typeContainer: {
		paddingHorizontal: 20,
		paddingVertical: 3,
		backgroundColor: color.background,
	},
	typeStyle: {
		fontSize: 14,
	},
	scoreContainer: {
		alignItems: 'center',
	},
	starsContainer: {
		flexDirection: 'row',
	},
	starStyle: {
		marginHorizontal: 5,
		marginBottom: 3,
	},
	levelArcStyle: {
		alignSelf: 'center',
		backgroundColor: color.background,
		width: ARC_WIDTH,
		height: ARC_WIDTH,
		borderTopStartRadius: ARC_WIDTH / 2,
		borderTopEndRadius: ARC_WIDTH / 2,
		marginTop: 30,
	},
	titleContainer: {
		margin: 30,
		alignSelf: 'center',
	},
	titleStyle: {
		fontSize: 28,
		fontWeight: 'bold',
	},
	levelIconContainer: {
		alignSelf: 'center',
		width: WIDTH,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	levelIconStyle: {
		marginHorizontal: 5,
	},
	buttonStartContainer: {
		alignSelf: 'center',
		flexDirection: 'row',
		backgroundColor: '#000',
		borderRadius: 25,
		paddingVertical: 10,
		paddingHorizontal: 15,
		justifyContent: 'center',
		alignItems: 'center',
		width: WIDTH - 100,
	},
	buttonStartTextStyle: {
		fontFamily: font.primary,
		fontSize: 22,
		color: '#fff',
		marginHorizontal: 10,
	},
});

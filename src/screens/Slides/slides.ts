import { ImageSourcePropType } from 'react-native';
import { color } from 'repeat-please-styles';

export interface ISlide {
	key?: string;
	title: string;
	text: string;
	image: ImageSourcePropType;
	backgroundColor?: string;
}

export const slides: ISlide[] = [
	{
		key: 'slide_01',
		title: 'Welcome to',
		text: 'It’s time to have fun while you improve your pronunciation.',
		image: require('../../../assets/images/speaker_girl.png'),
		backgroundColor: color.background,
	},
	{
		key: 'slide_02',
		title: 'Pronunciation Challenges',
		text: 'It’s time to have fun while you improve your pronunciation.',
		image: require('../../../assets/images/monkey_mouth.png'),
		backgroundColor: color.background,
	},
	{
		key: 'slide_03',
		title: 'Follow up your progress',
		text: 'It’s time to have fun while you improve your pronunciation.',
		image: require('../../../assets/images/monkey_smile.png'),
		backgroundColor: color.background,
	},
];

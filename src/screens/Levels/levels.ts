import { LevelType } from '../../components';
import { chimp, monkeyKing, kingKong } from '../../../assets/images';

export const levels: LevelType[] = [
	{
		icon: chimp,
		name: 'Chimp',
		description: '20 Words',
		color: '#08EF49',
	},
	{
		icon: monkeyKing,
		name: 'Monkey King',
		description: '60 Words',
		color: '#FBEA0D',
	},
	{
		icon: kingKong,
		name: 'King Kong',
		description: '100 Words',
		color: '#FF0000',
	},
];

import { IPAType } from '../../../../types/ipa';
import { RootStackParamList } from '../../../navigator/interface';
import { StackNavigationProp } from '@react-navigation/stack';

export interface IChallengeListProps {
	navigation: StackNavigationProp<RootStackParamList, 'Levels'>;
	wordsToPratice: IPAType[];
	wordsToReview: IPAType[];
	bestResults: IPAType[];
}

import { NavigationStackProp } from 'react-navigation-stack';
import { IPAType } from '../../../../types/ipa';

export interface IChallengeListProps {
	navigation: NavigationStackProp;
	wordsToPratice: IPAType[];
	wordsToReview: IPAType[];
	bestResults: IPAType[];
}

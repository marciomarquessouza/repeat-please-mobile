import { IPAType } from '../../types/ipa';

export type RootStackParamList = {
	AuthenticatedNavigator: undefined;
	UnauthenticatedNavigator: undefined;
	Slides: undefined;
	Walkthrough: undefined;
	SignIn: undefined;
	SignUp: undefined;
	ForgotPassword: { email: string };
	Home: undefined;
	Levels: undefined;
	Challenge: { IPA: IPAType } | undefined;
	Result: undefined;
	Loading: undefined;
	TabNavigator: undefined;
};

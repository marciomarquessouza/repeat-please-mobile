import { color } from 'repeat-please-styles';

export interface INavigate {
	navigate: (screen: string, parameter?: any) => void;
}

export const goToScreen = (
	navigation: INavigate,
	screen: string,
	parameters?: any,
): void => {
	const { navigate } = navigation;
	navigate(screen, parameters);
};

export const navigationOptionsDefault = {
	headerStyle: {
		backgroundColor: color.background,
	},
	headerTintColor: color.black,
};

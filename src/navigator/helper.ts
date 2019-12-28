import { NavigationStackProp } from 'react-navigation-stack';

export const goToScreen = (
	navigation: NavigationStackProp,
	screen: string,
	parameters?: any,
): void => {
	const { navigate } = navigation;
	navigate(screen, parameters);
};

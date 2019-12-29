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

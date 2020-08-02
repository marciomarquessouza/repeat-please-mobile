import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

const translationGetters = {
	en: require('./en-US.json'),
	pt: require('./pt-BR.json'),
};

interface ISetI18nConfig {
	languageTag: string;
	isRTL: boolean;
}

export const setI18nConfig = () => {
	const fallback: ISetI18nConfig = { languageTag: 'en', isRTL: false };
	const { languageTag } =
		RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
		fallback;
	i18n.use(initReactI18next).init({
		resources: translationGetters,
		lng: languageTag,
		fallbackLng: 'en',
		debug: false,
		interpolation: {
			escapeValue: false,
		},
	});
};

export { RNLocalize };

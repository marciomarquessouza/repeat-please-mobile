import Realm from 'realm';

export const IPA_SCHEMA_NAME = 'IPA';

export const IPASchema: Realm.ObjectSchema = {
	name: IPA_SCHEMA_NAME,
	primaryKey: 'id',
	properties: {
		id: 'int',
		symbol: 'string',
		examples: 'string',
	},
};

export const WORDS_TO_PRACTICE_SCHEMA_NAME = 'WordsToPratice';

export const WordsToPracticeSchema: Realm.ObjectSchema = {
	name: WORDS_TO_PRACTICE_SCHEMA_NAME,
	properties: {
		word: 'string',
		phonetic: 'string',
		ipaId: 'int',
		score: 'int',
	},
};

export const REPEAT_GRADE_SCHEMA_NAME = 'RepeatGrade';

export const RepeatGradeSchema: Realm.ObjectSchema = {
	name: REPEAT_GRADE_SCHEMA_NAME,
	properties: {
		level: 'int',
		wordsToPractice: {
			type: 'list',
			objectType: WORDS_TO_PRACTICE_SCHEMA_NAME,
		},
	},
};

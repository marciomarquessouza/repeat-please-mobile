import {
	ProfileSchema,
	RepeatGradeSchema,
	WordsToPracticeSchema,
	IPASchema,
} from '../../schemas';
import Realm from 'realm';

export default new Realm({
	schema: [ProfileSchema, IPASchema, WordsToPracticeSchema, RepeatGradeSchema],
});

import {
	ProfileSchema,
	RepeatGradeSchema,
	WordsToPracticeSchema,
	IPASchema,
} from '../../models';
import Realm from 'realm';

export default new Realm({
	schema: [ProfileSchema, IPASchema, WordsToPracticeSchema, RepeatGradeSchema],
});

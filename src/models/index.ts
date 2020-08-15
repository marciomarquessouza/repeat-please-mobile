import Realm from 'realm';
import { ProfileSchema } from './ProfileSchema';
import { RepeatGradeSchema } from './RepeatGradeSchema';

export default new Realm({ schema: [ProfileSchema, RepeatGradeSchema] });

import { ProfileSchema } from '../../models';
import Realm from 'realm';

export default new Realm({ schema: [ProfileSchema] });

import { myHandler } from './My';
import { postHandler } from './Posts';

export const handlers = [...postHandler, ...myHandler];

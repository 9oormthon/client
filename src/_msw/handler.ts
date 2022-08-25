import { listHandler } from './list';
import { postHandler } from './Posts';

export const handlers = [...postHandler, ...listHandler];

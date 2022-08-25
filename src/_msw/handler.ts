import { commentHandler } from './Comment';
import { myHandler } from './My';
import { postHandler } from './Posts';
import { validationHandler } from './Validation';

export const handlers = [...postHandler, ...myHandler, ...validationHandler, ...commentHandler];

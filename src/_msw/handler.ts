import { commentHandler } from './Comment';
import { listHandler } from './list';
import { myHandler } from './My';
import { postHandler } from './Posts';
import { validationHandler } from './Validation';

export const handlers = [
  ...postHandler,
  ...myHandler,
  ...listHandler,
  ...validationHandler,
  ...commentHandler,
];

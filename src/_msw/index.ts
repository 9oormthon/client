import { setupWorker, rest } from 'msw';

import { createMovies } from './handler';

export const worker = setupWorker(
  rest.get('/movies/:titleId', () => {
    console.log('1');
  }),
  rest.post('/write', createMovies),
);

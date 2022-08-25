import {
  rest,
  DefaultBodyType,
  PathParams,
  ResponseComposition,
  RestContext,
  RestRequest,
} from 'msw';

import { mockMyPosts, mockMyComments } from './data';

type Props = (
  req: RestRequest<never, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => any;

const getMyPosts: Props = (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(mockMyPosts));
};

const getMyComments: Props = (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(mockMyComments));
};

export const myHandler = [
  rest.get('/api/myPosts', getMyPosts),
  rest.get('/api/myComments', getMyComments),
];

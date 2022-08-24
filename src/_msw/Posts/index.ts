import {
  rest,
  DefaultBodyType,
  PathParams,
  ResponseComposition,
  RestContext,
  RestRequest,
} from 'msw';

import { mockPostData } from './data';

type Props = (
  req: RestRequest<never, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => any;

const getPosts: Props = (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(mockPostData));
};

export const postHandler = [rest.get('/api/posts?location', getPosts)];

import {
  rest,
  DefaultBodyType,
  PathParams,
  ResponseComposition,
  RestContext,
  RestRequest,
} from 'msw';

import { mockListData } from './data';

type Props = (
  req: RestRequest<never, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => any;

const getList: Props = (req, res, ctx) => {
  console.log(req);
  return res(ctx.status(200), ctx.json(mockListData));
};

export const listHandler = [rest.get('/api/list?id', getList)];

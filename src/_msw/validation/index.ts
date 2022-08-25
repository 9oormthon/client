import {
  rest,
  DefaultBodyType,
  PathParams,
  ResponseComposition,
  RestContext,
  RestRequest,
} from 'msw';

// import { mockPostData } from './data';

type Props = (
  req: RestRequest<never, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => any;

const postValidation: Props = (req, res, ctx) => {
  const { id } = req.body;
  return res(ctx.status(200), ctx.json(true));
};

export const validationHandler = [rest.post('/api/validation', postValidation)];

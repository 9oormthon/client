import { DefaultBodyType, PathParams, ResponseComposition, RestContext, RestRequest } from 'msw';

type Props = (
  req: RestRequest<never, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => any;

export const createMovies: Props = (req, res, ctx) => {
  const {
    body: { titleId, movieTitle, movieSrc, instruction },
  } = req;

  return res(ctx.json(1));
};

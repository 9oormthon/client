import { mockPostData } from '@MSW/Posts/data';
import {
  rest,
  DefaultBodyType,
  PathParams,
  ResponseComposition,
  RestContext,
  RestRequest,
} from 'msw';

type Props = (
  req: RestRequest<never, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => any;

const createComment: Props = (req, res, ctx) => {
  const { comment, postIdx, userId } = req.body;
  mockPostData
    .filter(({ id }) => id === postIdx)[0]
    .comments.concat({
      id: Math.floor(Math.random() * 1000),
      userName: userId,
      contents: comment,
      createAt: '2022-08-24 18:44',
    });
  return res(ctx.status(200), ctx.json(true));
};

export const commentHandler = [rest.post('/api/comment', createComment)];
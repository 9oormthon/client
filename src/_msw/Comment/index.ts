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
  const target = mockPostData.filter(({ id }) => id === Number(postIdx))[0];
  const newData = {
    id: Math.floor(Math.random() * 1000),
    userName: userId,
    contents: comment,
    createdAt: new Date().toString(),
  };
  if (!target?.comments) {
    target.comments = [newData];
  } else {
    target.comments.push(newData);
  }
  target.commentsCount += 1;
  return res(ctx.status(200), ctx.json(true));
};

export const commentHandler = [rest.post('/api/comment', createComment)];

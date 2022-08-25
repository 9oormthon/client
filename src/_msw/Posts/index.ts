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
  console.log(req);
  return res(ctx.status(200), ctx.json(mockPostData));
};

const createPosts: Props = (req, res, ctx) => {
  mockPostData.unshift({
    commentsCount: 0,
    ...(req.body as any),
    id: Math.floor(Math.random() * 10000),
  });
  return res(ctx.status(201));
};

// TODO: edit posts
const editPosts: Props = (req, res, ctx) => {
  return res(ctx.status(201));
};

const getOnePost: Props = (req, res, ctx) => {
  const { id } = req.params;
  const [data] = mockPostData.filter(({ id: postId }) => postId === Number(id));
  return res(
    ctx.status(200),
    ctx.json({
      ...data,
    }),
  );
};

const deleteList: Props = (req, res, ctx) => {
  const { pageIdx } = req.body;
  const datas = mockPostData.map(({ id }) => id);
  const idx = datas.indexOf(pageIdx);
  mockPostData.splice(idx, 1);
};

export const postHandler = [
  rest.get('/api/posts', getPosts),
  rest.post('/api/posts', createPosts),
  rest.put('/api/posts/:id', editPosts),
  rest.get('/api/posts/:id', getOnePost),
  rest.post('/api/delete', deleteList),
];

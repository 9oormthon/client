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

const getList: Props = (req, res, ctx) => {
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
export const listHandler = [
  rest.get('/api/list/:id', getList),
  rest.post('/api/delete', deleteList),
];

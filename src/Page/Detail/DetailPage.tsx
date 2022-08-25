import { useMovePage } from '@Hooks/useMovePage';
import { CategorySelector } from '@Recoil/Category';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { useDetailData, useQueryStr } from './Detail.hook';

export const DetailPage = () => {
  const id = useQueryStr();
  const [goMain] = useMovePage('/');
  const { data, loading } = useDetailData(id);
  const category = useRecoilValue(CategorySelector);

  if (!data) return null;
  if (loading) return <div>...loading!</div>;
  return (
    <>
      <Header>
        <BackButton src="/asset/whiteBack.svg" onClick={goMain} />
        <div>{category}</div>
      </Header>
      <div>
        <Wrapper>
          <div>
            <div>icon</div>
            <div>{data.title}</div>
            <div>{data.userName}</div>
            <div>{data.createdAt}</div>
          </div>
          <div>{data.contents}</div>
        </Wrapper>
        <div>
          <span>icon</span>
          <span>댓글</span>
          <span>{data.commentsCount}</span>
        </div>
        <Wrapper>
          {data.comments.map(({ id: commentId, userId, contents, createdAt }) => (
            <div key={commentId}>
              <div>icon</div>
              <div>{userId}</div>
              <div>{createdAt}</div>
              <div>{contents}</div>
            </div>
          ))}
        </Wrapper>
      </div>
    </>
  );
};

const Header = styled.div`
  width: 100%;
  height: 50px;
  padding: 20px;
  background: linear-gradient(180deg, #ff8836 0%, #ff6800 100%);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackButton = styled.img`
  position: fixed;
  width: 20px;
  height: 20px;
  top: 15px;
  left: 10px;
`;

const Wrapper = styled.div`
  padding: 16px;
  width: 100vw;
  box-sizing: border-box;
`;

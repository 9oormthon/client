import styled from 'styled-components';
import 'moment/locale/ko';

const CardWrapper = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0px 1px 12px rgba(115, 137, 169, 0.1);
  margin-bottom: 10px;
  padding: 20px;
  transition: all 0.3s ease;
  cursor: pointer;

  :hover {
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.4);
  }
`;

const ContentsWrapper = styled.div`
  color: #696969;
  font-size: 15px;
  margin: 10px 0;
`;

const Info = styled.p`
  display: flex;
  align-items: center;
  color: #aaaaaa;
  font-size: 12px;
`;

const sliceContents = (contents: string) => {
  if (contents.length <= 65) return contents;
  return `${contents.slice(0, 65)}...`;
};

export type CommentCardType = {
  postId: number;
  postTitle: string;
  contents: string;
  createdAt: string;
};
export const CommentCard = ({ data }: { data: CommentCardType }) => {
  const { postId, postTitle, contents, createdAt } = data;

  return (
    <CardWrapper id="Comment" data-id={postId}>
      <Info>{createdAt}</Info>
      <ContentsWrapper>{sliceContents(contents)}</ContentsWrapper>
      <Info>{postTitle}</Info>
    </CardWrapper>
  );
};

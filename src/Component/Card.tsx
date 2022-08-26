import { ReactComponent as Bubble } from '@Assets/bubble.svg';
import { getLevelIcon } from '@Common/Util/level';
import moment from 'moment';
import styled from 'styled-components';

import { ProfileWrapper } from './Profile';

import 'moment/locale/ko';

const sliceContents = (contents: string) => {
  if (contents.length <= 65) return contents;
  return `${contents.slice(0, 65)}...`;
};

export const Card = ({ data, isMy }: any) => {
  const { title, userName, contents, createdAt, years, postId: id } = data;

  return (
    <CardWrapper id="Card" data-id={id}>
      <TitleWrapper>
        <ProfileWrapper>{getLevelIcon(years)}</ProfileWrapper>
        {title}
      </TitleWrapper>
      <ContentsWrapper>{sliceContents(contents)}</ContentsWrapper>
      <InfoWrapper>
        <Info>
          <p style={{ marginRight: '10px' }}>{userName}</p>
          {/* <Comments>
            <BubbleIcon />
            {commentsCount}
          </Comments> */}
        </Info>
        <Info>{isMy ? createdAt : moment(createdAt).fromNow()}</Info>
      </InfoWrapper>
    </CardWrapper>
  );
};

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

const TitleWrapper = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  font-size: 18px;
`;

const ContentsWrapper = styled.div`
  color: #696969;
  font-size: 15px;
  margin: 10px 0;
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #aaaaaa;
  font-size: 12px;

  :last-child {
    margin-left: 5px;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Comments = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BubbleIcon = styled(Bubble)`
  margin-right: 3px;
`;

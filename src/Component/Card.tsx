import { ReactComponent as Bubble } from '@Assets/bubble.svg';
import moment from 'moment';
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

const Profile = styled.img`
  width: 32px;
  height: 32px;
  background: linear-gradient(180deg, #ff8836 0%, #ff6800 100%);
  padding: 6px;
  border-radius: 50%;
  margin-right: 10px;
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

const Info = styled.p`
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
  position: relative;
  margin-left: 6px;
  padding-left: 6px;

  ::before {
    content: ' ';
    height: 100%;
    background: #aaaaaa;
    width: 1px;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
  }
`;

const BubbleIcon = styled(Bubble)`
  margin-right: 3px;
`;

const sliceContents = (contents: string) => {
  if (contents.length <= 65) return contents;
  return `${contents.slice(0, 65)}...`;
};

// TODO: years에 따라 다른 Profile image 보여주기
export const Card = ({ data }: any) => {
  const { title, userName, contents, createdAt, years, commentsCount, id } = data;

  return (
    <CardWrapper id="Card" data-id={id}>
      <TitleWrapper>
        <Profile src="/asset/chick.svg" alt="profile" />
        {title}
      </TitleWrapper>
      <ContentsWrapper>{sliceContents(contents)}</ContentsWrapper>
      <InfoWrapper>
        <Info>
          <p>{userName}</p>
          <Comments>
            <BubbleIcon />
            {commentsCount}
          </Comments>
        </Info>
        <Info>{moment(createdAt).fromNow()}</Info>
      </InfoWrapper>
    </CardWrapper>
  );
};

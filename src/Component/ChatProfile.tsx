import moment from 'moment';
import styled from 'styled-components';

import { Profile } from './Profile';

type Props = {
  id: number;
  userName: string;
  createdAt: string;
  contents: string;
};
export const ChatProfile = ({ id, userName, createdAt, contents }: Props) => {
  return (
    <Container>
      <ProfileContainer>
        <Profile src="/asset/chick.svg" alt="profile" />
        <div>
          <NickName>{userName}</NickName>
          <Info>{moment(createdAt).fromNow()}</Info>
          <Content>{contents}</Content>
        </div>
      </ProfileContainer>
    </Container>
  );
};

const Info = styled.p`
  color: #aaaaaa;
  font-size: 12px;
  margin-bottom: 4px;
`;

const Container = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
`;

const ProfileContainer = styled.div`
  display: flex;
`;

const NickName = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 142.02%;
  color: #242424;
`;

const Content = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 142.02%;

  color: #242424;
`;

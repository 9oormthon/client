/* eslint-disable import/extensions */
import { ReactComponent as Chick } from '@Assets/chick.svg';
import { ReactComponent as GoBack } from '@Assets/GoBack.svg';
import { getStorage } from '@Common/Util/localStorage';
import { Card } from '@Component/Card';
import { CommentCard } from '@Component/CommentCard';
import { useMovePage } from '@Hooks/useMovePage';
import { useHandleCardClick, useHandleMoveCard } from '@Page/Main/MainPage.hook';
import styled from 'styled-components';

import { useCurrentTab, useGetMyData, useLoading } from './MyPage.hook';

export const MyPage = () => {
  const [handleGoBack] = useMovePage('/');
  const { currentTab, handleTabClick } = useCurrentTab();
  const { isLoading, handleFalseLoading } = useLoading();
  const { id, years } = getStorage();
  const { postData, commentData } = useGetMyData(id, handleFalseLoading);
  const handleCardClick = useHandleCardClick();
  const handleCommentClick = useHandleMoveCard();
  const handleBodyClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    handleCardClick(e);
    handleCommentClick(e);
  };
  if (!id) {
    handleGoBack();
    return null;
  }
  return (
    <>
      <Header>
        <NavBar>
          <GoBackIcon onClick={handleGoBack} />
          마이페이지
        </NavBar>
        <MyInfo>
          <ProfileIcon />
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
            <UserName>{id}</UserName>
            <div style={{ display: 'flex' }}>
              <Years style={{ marginRight: '5px' }}>LEVEL 4</Years>
              <Years>{years}년 차</Years>
            </div>
          </div>
        </MyInfo>
      </Header>
      <Tabs>
        <TabItem isCurrentTab={currentTab === 'post'} onClick={() => handleTabClick('post')}>
          내가 작성한 글
        </TabItem>
        <TabItem isCurrentTab={currentTab === 'comment'} onClick={() => handleTabClick('comment')}>
          내가 작성한 댓글
        </TabItem>
      </Tabs>
      <Body onClick={handleBodyClick}>
        {!isLoading &&
          currentTab === 'post' &&
          postData.map(v => <Card key={v.id} data={v} isMy />)}
        {!isLoading &&
          currentTab === 'comment' &&
          commentData.map(v => <CommentCard key={v.postId} data={v} />)}
      </Body>
    </>
  );
};

const Header = styled.div`
  background: linear-gradient(180deg, #ff8836 0%, #ff6800 100%);
  height: 170px;
  color: white;
  font-size: 16px;
`;

const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
`;

const ProfileIcon = styled(Chick)`
  padding: 17px;
  width: 64px;
  height: 64px;
  background-color: white;
  border-radius: 50%;
  border: 2px solid #ff9348;
  margin-right: 10px;

  path {
    fill: #ff6800;
  }
`;

const GoBackIcon = styled(GoBack)`
  width: 10px;
  height: 17px;
  position: absolute;
  left: 20px;

  path {
    fill: white;
  }
`;

const UserName = styled.p`
  color: white;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
`;

const Years = styled.div`
  height: 24px;
  background: #ffffff;
  padding: 0 10px;
  border-radius: 58px;
  color: #ff6800;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MyInfo = styled.div`
  display: flex;
  margin: 20px;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
  padding: 10px;

  & > :first-child {
    border-right: 2px solid #d9d9d9;
  }
`;

type TabItemProps = {
  isCurrentTab: boolean;
};

const TabItem = styled.p<TabItemProps>`
  color: ${({ isCurrentTab }) => (isCurrentTab ? '#000000' : '#a8a8a8')};
  padding: 4px;
  width: 50%;
  text-align: center;
  cursor: pointer;
`;

const Body = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  height: 100vh;
  padding: 20px;
`;

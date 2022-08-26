import { ReactComponent as Chick } from '@Assets/chick.svg';
import { Button } from '@Component/Button';
import { Card } from '@Component/Card';
import { useMovePage } from '@Hooks/useMovePage';
import { CategorySelector } from '@Recoil/Category';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { useGetData, useGetLocation, useHandleCardClick } from './MainPage.hook';

export const MainPage = () => {
  const category = useRecoilValue(CategorySelector);
  const { location, handleLocation } = useGetLocation();
  const { data, isLoading } = useGetData(location, category);
  const [goCategory, goWrite, goMyPage] = useMovePage(['/category', '/write', '/my']);
  const handleCardClick = useHandleCardClick();

  return (
    <div>
      <Header>
        <MenuIcon src="/asset/menu.svg" alt="menu" onClick={goCategory} />
        {category}
        <MyPageIcon onClick={goMyPage} />
      </Header>
      <LocationWrapper>
        <select onChange={handleLocation}>
          <option>전체</option>
          <option>제주시</option>
          <option>서귀포시</option>
        </select>
      </LocationWrapper>
      <Body onClick={handleCardClick}>
        {!isLoading && data.map(v => <Card key={v.postId} data={v} />)}
        {!isLoading && data.length === 0 && <Empty>~텅</Empty>}
      </Body>
      <Footer>
        <WriteButton onClick={goWrite}>작성하기</WriteButton>
      </Footer>
    </div>
  );
};

const Header = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 50px;
  padding: 20px;
  background: linear-gradient(180deg, #ff8836 0%, #ff6800 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const MenuIcon = styled.img`
  width: 22px;
  height: 22px;
  cursor: pointer;
`;

const MyPageIcon = styled(Chick)`
  cursor: pointer;
`;

const LocationWrapper = styled.div`
  position: fixed;
  top: 50px;
  padding: 12px;
  padding-left: 20px;
  box-sizing: border-box;
  height: 40px;
  width: 100%;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  img {
    width: 10px;
    height: 10px;
    margin-left: 8px;
  }
`;

const Body = styled.div`
  margin-top: 90px;
  height: calc(100vh - 90px);
  background-color: #f5f5f5;
  width: 100%;
  padding: 20px;
  padding-top: 0px;
`;

const Empty = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 500;
`;

const WriteButton = styled(Button)`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

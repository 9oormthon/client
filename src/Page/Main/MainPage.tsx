import { getStorage } from '@Common/Util/localStorage';
import { Button } from '@Component/Button';
import { Card } from '@Component/Card';
import { useMovePage } from '@Hooks/useMovePage';
import { useOnBoard } from '@Hooks/useOnBoard';
import { useState, useEffect, useLayoutEffect } from 'react';
import styled from 'styled-components';

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
`;

const ChickIcon = styled.img`
  width: 22px;
  height: 22px;
`;

const Body = styled.div`
  margin-top: 50px;
  background-color: #f5f5f5;
  width: 100%;
  height: 100vh;
  padding: 20px;
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
export const MainPage = () => {
  const idx = useOnBoard();
  const [onBoard] = useMovePage('/onBoard');
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (idx === 2) return;
    onBoard();
  }, [idx]);

  useLayoutEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/posts');
      const json = await response.json();
      setData(json);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const { years, id } = getStorage();

  return (
    <div>
      <Header>
        <MenuIcon src="/asset/menu.svg" alt="menu" />
        동네분위기
        <ChickIcon src="/asset/chick.svg" alt="chick" />
      </Header>
      <Body>{!isLoading && data.map(v => <Card data={v} />)}</Body>
      <Footer>
        <WriteButton>작성하기</WriteButton>
      </Footer>
    </div>
  );
};

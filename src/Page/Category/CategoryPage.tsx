import { Menu } from '@Assets/categoryIcons';
import { BackButton } from '@Component/BackButton';
import { Button } from '@Component/Button';
import { useMovePage } from '@Hooks/useMovePage';
import { useState } from 'react';
import styled, { css } from 'styled-components';

type IconType = {
  select: boolean;
};
const MenuIcon = styled<IconType>(Menu)`
  path {
    fill: ${({ select }) => (select ? 'white' : 'orange')};
  }
`;

export const CategoryPage = () => {
  const [state, setState] = useState(0);
  const [goHome] = useMovePage('/');
  const handleGoBack = () => {
    localStorage.removeItem('years');
    goHome();
  };
  const handleClickMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const parent = (e.target as Element).closest('#container');
    if (!(parent instanceof HTMLDivElement)) {
      return;
    }
    setState(Number(parent.dataset.id));
  };
  return (
    <Wrapper>
      <BackButton onClick={handleGoBack} />

      <Container>
        {CATEGORY.map(({ id, icon, title }) => (
          <CategoryWrapper
            id="container"
            data-id={id}
            key={id}
            select={id === state}
            onClick={handleClickMenu}
          >
            {icon(id === state)}
            <span>{title}</span>
          </CategoryWrapper>
        ))}
      </Container>
      <ButtonWrapper>
        <Button onClick={() => goHome()}>이동하기</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 47px;
  display: flex;
  width: 100vw;
  justify-content: center;
`;

const Container = styled.div`
  /* height: 50%; */
  position: absolute;
  top: 85px;
  width: 100%;
  max-width: 400px;
  display: grid;
  row-gap: 30px;
  grid-template-columns: repeat(4, 1fr);
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 143.52%;
  color: #242424;
  padding: 20px;
  box-sizing: border-box;
`;

const selectStyle = css`
  background: linear-gradient(180deg, #ff8836 0%, #ff6800 100%);
  box-shadow: 0px 1px 6px rgba(99, 121, 153, 0.2);
  color: #ffffff;
`;
type Props = {
  select: boolean;
};
const CategoryWrapper = styled.div<Props>`
  background: #ffffff;
  box-shadow: 0px 1px 6px rgba(99, 121, 153, 0.2);
  border-radius: 16px;
  width: 80px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  padding: 14px;
  box-sizing: border-box;
  ${({ select }) => select && selectStyle}
`;

const CATEGORY = [
  {
    id: 0,
    icon: (select: boolean) => <MenuIcon select={select} />,
    title: '전체',
  },
  {
    id: 1,
    icon: (select: boolean) => <MenuIcon select={select} />,
    title: '교통',
  },
  {
    id: 2,
    icon: '/asset/mood.svg',
    title: '분위기',
  },
  {
    id: 3,
    icon: '/asset/rentCar.svg',
    title: '렌트카',
  },
  {
    id: 4,
    icon: '/asset/restruant.svg',
    title: '맛집',
  },
  {
    id: 5,
    icon: '/asset/house.svg',
    title: '부동산',
  },
  {
    id: 6,
    icon: '/asset/parking.svg',
    title: '주차장',
  },
  {
    id: 7,
    icon: '/asset/populate.svg',
    title: '인구',
  },
  {
    id: 8,
    icon: '/asset/cafe.svg',
    title: '카페',
  },
  {
    id: 9,
    icon: '/asset/act.svg',
    title: '여가활동',
  },
];

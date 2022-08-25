import { getLevel, getLevelIcon } from '@Common/Util/level';
import { getStorage } from '@Common/Util/localStorage';
import { Button } from '@Component/Button';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.div`
  font-size: 24px;
  text-align: center;
  margin-bottom: 50px;
`;

const Level = styled.span`
  color: #ff8836;
  font-weight: 600;
`;

const Background = styled.img`
  width: 350px;
  height: 350px;
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

const LevelIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  svg {
    width: 40px;
    height: 40px;
  }
`;

export const Welcome = () => {
  const { id, years } = getStorage();
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header>
        <div>
          제주 {years}년차 {id}님은
        </div>
        <div>
          <Level>LEVEL {getLevel(Number(years))}</Level> 입니다!
        </div>
        <div>환영합니다🍊</div>
      </Header>
      <div style={{ position: 'relative' }}>
        <Background src="/asset/levelBackground.png" alt="background" />
        <LevelIcon>{getLevelIcon(Number(years))}</LevelIcon>
      </div>
      <Button style={{ position: 'absolute', bottom: '50px' }} onClick={() => navigate('/')}>
        메인화면으로 가기
      </Button>
    </Wrapper>
  );
};

import { Button } from '@Component/Button';
import { useHandleInputRef, useToggleSlide } from '@Hooks/useOnBoard';
import { useRef } from 'react';
import styled, { css } from 'styled-components';

type Props = {
  storageKey: 'years' | 'id';
  text: () => JSX.Element;
};

export const OnBoardingHOC = ({ storageKey, text }: Props) => {
  const slide = useToggleSlide();
  const ref = useRef<HTMLDivElement>(null);
  const { inputRef, handleBoardData, registerData } = useHandleInputRef(storageKey);

  return (
    <Wrapper>
      {storageKey === 'id' && <BackButton src="/asset/GoBack.svg" alt="뒤로가기" />}
      <Container slide={slide} ref={ref} className="slideDown">
        <div>{text()}</div>
        <Input
          type="text"
          ref={inputRef}
          onKeyDown={handleBoardData}
          placeholder={storageKey === 'years' ? '연차' : '이름'}
        />
      </Container>
      <ButtonWrapper>
        <Button onClick={registerData}>{storageKey === 'years' ? '다음' : '완료'}</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

type ContainerProps = {
  slide: boolean;
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`;
const slideUp = css`
  top: 15%;
  opacity: 1;
  transition: 1s;
`;
const Container = styled.div<ContainerProps>`
  height: 50%;
  position: absolute;
  top: 50%;
  display: flex;
  flex-direction: column;
  opacity: 0;
  font-size: 24px;
  line-height: 143.52%;
  ${({ slide }) => slide && slideUp}
`;
const Input = styled.input`
  border-bottom: 2px solid rgba(255, 104, 0, 0.6);
  margin-top: 30px;
  width: 350px;
  ::placeholder {
    color: #bbbbbb;
    font-size: 17px;
    font-weight: 500;
    line-height: 20px;
  }
`;
const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 47px;
  display: flex;
  width: 100vw;
  justify-content: center;
`;
// const Button = styled.button`
//   width: 178px;
//   height: 58px;
//   color: #ffffff;
//   background: linear-gradient(180deg, #ff8836 0%, #ff6800 100%);
//   border-radius: 53.5385px;
// `;

const BackButton = styled.img`
  position: fixed;
  width: 20px;
  height: 20px;
  top: 40px;
  left: 10px;
  color: #939393;
`;

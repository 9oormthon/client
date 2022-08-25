import { BackButton } from '@Component/BackButton';
import { Button } from '@Component/Button';
import { useMovePage } from '@Hooks/useMovePage';
import { useHandleInputRef, useToggleSlide } from '@Hooks/useOnBoard';
import { useValidationModal } from '@Hooks/useValidationModal';
import { useRef, useState } from 'react';
import styled, { css } from 'styled-components';

type Props = {
  storageKey: 'years' | 'id';
  text: () => JSX.Element;
};

export const OnBoardingHOC = ({ storageKey, text }: Props) => {
  const { modal, handleModal, closeModal } = useValidationModal(storageKey);
  const slide = useToggleSlide();
  const ref = useRef<HTMLDivElement>(null);
  const { inputRef, handleBoardData, registerData } = useHandleInputRef(storageKey, handleModal);
  const [goBoard] = useMovePage('/onboard');
  const handleGoBack = () => {
    localStorage.removeItem('years');
    goBoard();
  };
  return (
    <Wrapper>
      {storageKey === 'id' && <BackButton onClick={handleGoBack} />}
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
      {modal && (
        <ModalContainer>
          {modal}
          <ModalButtonContainer>
            <ModalButton onClick={closeModal}>닫기</ModalButton>
          </ModalButtonContainer>
        </ModalContainer>
      )}
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
  opacity: 100;
  transition: 1s;
`;
const Container = styled.div<ContainerProps>`
  height: 50%;
  position: absolute;
  top: 50%;
  display: flex;
  flex-direction: column;
  opacity: 0;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 143.52%;
  color: #242424;
  ${({ slide }) => slide && slideUp}
`;
const Input = styled.input`
  border-bottom: 2px solid rgba(255, 104, 0, 0.6);
  opacity: 60;
  margin-top: 30px;
  width: 350px;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  padding: 10px 0;

  color: #242424;
  ::placeholder {
    color: #bbbbbb;
    font-size: 17px;
    font-weight: 400;
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

const ModalContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
  width: 320px;
  height: 227px;
  position: fixed;
  top: 30%;
  left: calc(50% - 160px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;

  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;

  text-align: center;

  color: #242424;
`;

const ModalButtonContainer = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const ModalButton = styled(Button)`
  width: 280px;
  height: 48px;
`;

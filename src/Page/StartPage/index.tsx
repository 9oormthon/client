import styled from 'styled-components';

export const StartPage = () => {
  return (
    <Container>
      <img src="/asset/Logo.svg" alt="logo" />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

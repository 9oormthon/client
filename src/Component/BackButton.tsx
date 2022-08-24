import styled from 'styled-components';

type Props = {
  onClick: () => void;
};
export const BackButton = ({ onClick }: Props) => (
  <Container src="/asset/GoBack.svg" onClick={onClick} alt="뒤로가기" />
);

const Container = styled.img`
  position: fixed;
  width: 20px;
  height: 20px;
  top: 30px;
  left: 10px;
  color: #939393;
`;

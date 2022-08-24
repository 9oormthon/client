import styled from 'styled-components';

const CardWrapper = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0px 1px 12px rgba(115, 137, 169, 0.1);
  margin-bottom: 10px;
  padding: 20px;
  transition: all 0.3s ease;
  cursor: pointer;

  :hover {
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.4);
  }
`;

const Profile = styled.img`
  width: 32px;
  height: 32px;
  background: linear-gradient(180deg, #ff8836 0%, #ff6800 100%);
  padding: 6px;
  border-radius: 50%;
  margin-right: 10px;
`;

const TitleWrapper = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  font-size: 18px;
`;

const ContentsWrapper = styled.div`
  color: #696969;
  font-size: 15px;
  margin: 10px 0;
`;

const Info = styled.p`
  color: #aaaaaa;
  font-size: 12px;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Card = ({ data }: any) => {
  console.log(data);
  const { title, userName, contents, createdAt, years } = data;

  return (
    <CardWrapper>
      <TitleWrapper>
        <Profile src="/asset/chick.svg" alt="profile" />
        {title}
      </TitleWrapper>
      <ContentsWrapper>{contents}</ContentsWrapper>
      <InfoWrapper>
        <Info>{userName}</Info>
        <Info>{createdAt}</Info>
      </InfoWrapper>
    </CardWrapper>
  );
};

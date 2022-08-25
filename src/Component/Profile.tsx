import styled from 'styled-components';

export const Profile = styled.img`
  width: 32px;
  height: 32px;
  background: linear-gradient(180deg, #ff8836 0%, #ff6800 100%);
  padding: 6px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const ProfileStyle = `
width: 32px;
height: 32px;
background: linear-gradient(180deg, #ff8836 0%, #ff6800 100%);
border-radius: 50%;
margin-right: 10px;
`;

export const ProfileWrapper = styled.div`
  ${ProfileStyle}
  display: flex;
  align-items: center;
  justify-content: center;

  path {
    fill: #fff;
  }
`;

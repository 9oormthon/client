/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import { ReactComponent as Bubble } from '@Assets/bubble.svg';
import { Option, Send } from '@Assets/categoryIcons';
import { postAPI } from '@Common/Util/api';
import { getStorage } from '@Common/Util/localStorage';
import { Button } from '@Component/Button';
import { ChatProfile } from '@Component/ChatProfile';
import { Word } from '@Component/OnBoarding';
import { Profile } from '@Component/Profile';
import { useMovePage } from '@Hooks/useMovePage';
import { useToggle } from '@Hooks/useToggle';
import { CategorySelector } from '@Recoil/Category';
import moment from 'moment';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import 'moment/locale/ko';
import { useDetailData, useInputHandler, useQueryStr } from './Detail.hook';

export const DetailPage = () => {
  const id = useQueryStr();
  const category = useRecoilValue(CategorySelector);
  const [idx, setIdx] = useState({});
  const { ref, handleSendComment } = useInputHandler(id, setIdx);
  const { data, loading } = useDetailData(id, idx);
  const { id: userName } = getStorage();
  const myPost = data?.userName === userName;
  const { state: optionModal, toggle: optionToggle } = useToggle();
  const { state: deleteModal, toggle: deleteToggle } = useToggle();
  const handleDeleteButton = () => {
    deleteToggle();
    optionToggle();
  };
  const [goMain, goUpdate] = useMovePage(['/', `/update/${id}`]);
  const deletePost = () => {
    postAPI('delete', { postId: id, userName }).then(res => goMain());
    deleteToggle();
  };
  if (!data) return null;
  if (loading) return <div>...loading!</div>;
  return (
    <>
      <Header>
        <BackButton src="/asset/whiteBack.svg" onClick={goMain} />
        <div>{category}</div>
        {myPost && (
          <OptionContainer>
            <Option onClick={optionToggle} />
            {optionModal && (
              <OptionModalContainer>
                <div aria-hidden onClick={handleDeleteButton}>
                  삭제
                </div>
                <div aria-hidden onClick={goUpdate}>
                  수정
                </div>
              </OptionModalContainer>
            )}
          </OptionContainer>
        )}
      </Header>
      <div>
        <Wrapper>
          <MainContainer>
            <Profile src="/asset/chick.svg" alt="profile" />
            <TitleContainer>
              <div>{data.title}</div>
              <TitleInfoContainer>
                <div>{data.userName}</div>
                <Info>{moment(data.createdAt).fromNow()}</Info>
              </TitleInfoContainer>
            </TitleContainer>
          </MainContainer>
          <ContentContainer>{data.contents}</ContentContainer>
        </Wrapper>

        <div>
          <Comments>
            <BubbleIcon />
            댓글 {data.commentsCount}
          </Comments>
        </div>
        <CommentWrapper>
          {data.comment?.map(item => (
            <ChatProfile {...item} key={item.id} />
          ))}
        </CommentWrapper>
      </div>
      <Footer>
        <Input placeholder="댓글을 남겨보세요" ref={ref} />
        <SendIcon onClick={handleSendComment} />
      </Footer>
      {deleteModal && (
        <DeleteModalContainer>
          <DeleteWordContainer>
            <Word>삭제</Word>하시겠습니까?
          </DeleteWordContainer>
          <ButtonContainer>
            <NoButton onClick={deleteToggle}>아니오</NoButton>
            <YesButton onClick={deletePost}>예</YesButton>
          </ButtonContainer>
        </DeleteModalContainer>
      )}
    </>
  );
};

const Header = styled.div`
  width: 100%;
  height: 50px;
  padding: 20px;
  background: linear-gradient(180deg, #ff8836 0%, #ff6800 100%);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackButton = styled.img`
  position: fixed;
  width: 20px;
  height: 20px;
  top: 15px;
  left: 10px;
`;

const Wrapper = styled.div`
  padding: 16px;
  width: 100vw;
  box-sizing: border-box;
`;

const CommentWrapper = styled(Wrapper)`
  padding-top: 0px;
  height: calc(100vh - 360px);
  overflow: auto;
`;

const Info = styled.p`
  color: #aaaaaa;
  font-size: 12px;
`;

const MainContainer = styled.div`
  display: flex;
  padding: 5px 0px 21px 0px;
  border-bottom: 1px solid #eaeaea;
  align-items: center;

  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #323232;
`;

const TitleContainer = styled.div`
  width: 100%;
`;

const TitleInfoContainer = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 142.02%;
  width: 100%;
  color: #aaaaaa;
  display: flex;
  justify-content: space-between;
`;

const ContentContainer = styled.p`
  margin-top: 16px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;

  color: #3c3c3c;
`;

const Comments = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 10px 10px 10px 16px;
  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;

  color: #696969;
`;

const BubbleIcon = styled(Bubble)`
  margin-right: 5px;
`;

const Footer = styled.footer`
  width: 100%;
  height: 90px;
  position: fixed;
  bottom: 0px;
  border-top: 1px solid #d9d9d9;
  padding: 12px 16px 35px 16px;
  background-color: #ffffff;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 47px;

  padding: 11px 40px 11px 16px;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #242424;
  ::placeholder {
    color: #d8d9d9;
  }
`;

const SendIcon = styled(Send)`
  position: absolute;
  bottom: 40px;
  right: 20px;
`;

const OptionContainer = styled.div`
  position: fixed;
  width: 20px;
  height: 20px;
  top: 15px;
  right: 10px;
`;

const OptionModalContainer = styled.div`
  background: #ffffff;
  border-radius: 6px;
  width: 150px;
  height: 110px;
  z-index: 1;
  position: absolute;
  right: 0px;
  top: 25px;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  padding: 20px 16px;
  box-sizing: border-box;
  color: #323232;
  box-shadow: 0px 3.34615px 8.92308px rgba(0, 0, 0, 0.18);
  div + div {
    margin-top: 28px;
  }
`;

const DeleteModalContainer = styled.div`
  z-index: 1;
  background: #ffffff;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
  position: fixed;
  top: 30%;
  left: calc(50vw - 160px);
  width: 320px;
  height: 227px;
`;

const DeleteWordContainer = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  height: calc(100% - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NoButton = styled(Button)`
  width: 136px;
  height: 48px;
  background: linear-gradient(180deg, #e1e1e1 0%, #e1e1e1 70.28%, #e0e0e0 100%);
  border-radius: 24px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #696969;
`;

const YesButton = styled(NoButton)`
  background: linear-gradient(180deg, #ff8836 0%, #ff6800 100%);
  color: #ffffff;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  padding: 0px 20px;
  justify-content: space-between;
`;

/* eslint-disable react/jsx-props-no-spreading */
import { ReactComponent as Bubble } from '@Assets/bubble.svg';
import { Option, Send } from '@Assets/categoryIcons';
import { ChatProfile } from '@Component/ChatProfile';
import { Profile } from '@Component/Profile';
import { useMovePage } from '@Hooks/useMovePage';
import { useToggle } from '@Hooks/useToggle';
import { CategorySelector } from '@Recoil/Category';
import moment from 'moment';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import 'moment/locale/ko';
import { useCheckMyPost, useDetailData, useInputHandler, useQueryStr } from './Detail.hook';

export const DetailPage = () => {
  const id = useQueryStr();
  const [goMain] = useMovePage('/');
  const { data, loading } = useDetailData(id);
  const category = useRecoilValue(CategorySelector);
  const { ref, handleSendComment } = useInputHandler();
  const myPost = useCheckMyPost(data?.userName ?? '');
  const { state: optionModal, toggle: optionToggle } = useToggle();
  const { state: deleteModal, toggle: deleteToggle } = useToggle();
  const [goUpdate] = useMovePage('/update');
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
              <div>
                <div aria-hidden onClick={deleteToggle}>
                  삭제
                </div>
                <div aria-hidden onClick={goUpdate}>
                  수정
                </div>
              </div>
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
          {data.comments.map(item => (
            <ChatProfile {...item} key={item.id} />
          ))}
        </CommentWrapper>
      </div>
      <Footer>
        <Input placeholder="댓글달기" ref={ref} />
        <SendIcon onClick={handleSendComment} />
      </Footer>
      {deleteModal && (
        <div>
          <div>삭제하시겠습니까?</div>
          <div>
            <div>아니오</div>
            <div>예</div>
          </div>
        </div>
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

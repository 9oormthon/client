/* eslint-disable react/no-array-index-key */
import { postAPI } from '@Common/Util/api';
import { getStorage } from '@Common/Util/localStorage';
import { Button } from '@Component/Button';
import { useMovePage } from '@Hooks/useMovePage';
import { CATEGORY_NAMES } from '@Page/Category/CategoryPage';
import { useRef } from 'react';
import styled from 'styled-components';

import { useGetLocation, useGetCategory } from './WritePage.hook';

export const WritePage = () => {
  const [goMain] = useMovePage('/');
  const titleRef = useRef<HTMLInputElement>(null);
  const contentsRef = useRef<HTMLTextAreaElement>(null);
  const { location, handleLocation } = useGetLocation();
  const { category, handleCategory } = useGetCategory();

  const handleCreatePost = async () => {
    if (!titleRef?.current || !contentsRef?.current) return;
    const title = titleRef.current.value;
    const contents = contentsRef.current.value;
    const { id, years } = getStorage();
    const data = {
      title,
      contents,
      category,
      location,
      userName: id,
      years,
    };
    await postAPI('post', data);
    goMain();
  };

  return (
    <>
      <Header>
        <BackButton src="/asset/whiteBack.svg" onClick={goMain} />
        <div>글 작성하기</div>
      </Header>
      <Body>
        <TitleBox>
          <TitleInput placeholder="제목" ref={titleRef} />
        </TitleBox>
        <SelectorBox>
          <Selector onChange={handleLocation}>
            <option>제주시</option>
            <option>서귀포시</option>
          </Selector>
          <Selector onChange={handleCategory}>
            {CATEGORY_NAMES.map((item, i) => (
              <option key={i}>{item}</option>
            ))}
            <option />
          </Selector>
        </SelectorBox>
        <ContentsInput placeholder="내용을 입력하세요" ref={contentsRef} />
      </Body>
      <Footer>
        <Button onClick={handleCreatePost}>완료</Button>
      </Footer>
    </>
  );
};

const Header = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
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

const Body = styled.div`
  margin-top: 70px;
  padding: 0 15px;
  box-sizing: border-box;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const TitleBox = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;
const TitleInput = styled.input`
  width: 100%;
  border-bottom: 1px solid #eaeaea;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  padding-bottom: 16px;
  color: #323232;
  ::placeholder {
    color: #bbbbbb;
  }
`;

const SelectorBox = styled.div`
  display: flex;
  select + select {
    margin-left: 10px;
  }
  margin-bottom: 15px;
`;

const Selector = styled.select`
  background: #ffffff;
  border: 1px solid #ff6800;
  border-radius: 6px;
  padding: 8px 15px;
`;

const ContentsInput = styled.textarea`
  width: 100%;
  height: calc(100vh - 240px);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #3c3c3c;
  ::placeholder {
    font-style: normal;
    color: #bbbbbb;
  }
`;

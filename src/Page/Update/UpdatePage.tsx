/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable import/extensions */
import { putAPI } from '@Common/Util/api';
import { getStorage } from '@Common/Util/localStorage';
import { Button } from '@Component/Button';
import { CATEGORY_NAMES } from '@Page/Category/CategoryPage';
import { dataType, useDetailData, useQueryStr } from '@Page/Detail/Detail.hook';
import { useGetLocation, useGetCategory } from '@Page/Write/WritePage.hook';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const idx = {};
export const UpdatePage = () => {
  const id = useQueryStr();
  const { data, loading } = useDetailData(id, idx, () => {});
  const navigate = useNavigate();
  const goDetail = () => navigate(`/detail/${id}`);
  const titleRef = useRef<HTMLInputElement>(null);
  const contentsRef = useRef<HTMLTextAreaElement>(null);
  const { location, handleLocation } = useGetLocation(data?.location);
  const { category, handleCategory } = useGetCategory(data?.category);

  const handleUpdatePost = () => {
    if (!titleRef?.current || !contentsRef?.current) return;
    const title = titleRef.current.value;
    const contents = contentsRef.current.value;
    const { years, id: userName } = getStorage();
    const data = {
      id,
      title,
      contents,
      category,
      location,
      userName,
      years,
    };
    putAPI(`posts/${id}`, data).then(() => goDetail());
  };

  useEffect(() => {
    console.log('???');
    if (!titleRef?.current || !contentsRef?.current) return;
    const { title, contents } = data as dataType;
    titleRef.current.value = title;
    contentsRef.current.value = contents;
  }, [data]);

  if (!data) return null;
  if (loading) return <div>...loading</div>;

  return (
    <>
      <Header>
        <BackButton src="/asset/whiteBack.svg" onClick={goDetail} />
        <div>{data.category}</div>
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
            {CATEGORY_NAMES?.map((item, i) => (
              <option key={i}>{item}</option>
            ))}
          </Selector>
        </SelectorBox>
        <ContentsInput placeholder="내용을 입력하세요" ref={contentsRef} />
      </Body>
      <Footer>
        <Button onClick={handleUpdatePost}>완료</Button>
      </Footer>
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

const Body = styled.div`
  margin-top: 70px;
  padding: 0 15px;
  box-sizing: border-box;
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

const Footer = styled.footer`
  position: fixed;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

import styled from 'styled-components';

import { OnBoardingHOC } from '../HOC/OnBoardingHOC';

export const OnBoardingId = () => <OnBoardingHOC storageKey="id" text={IdComponent} />;
export const OnBoardingYear = () => <OnBoardingHOC storageKey="years" text={YearComponent} />;

const YearComponent = () => {
  return (
    <>
      <div>제주도에서 거주한 지</div>
      <div>
        <Word>몇 년 차</Word>이신가요?
      </div>
    </>
  );
};

const IdComponent = () => {
  return (
    <>
      <div>사용을 원하는</div>
      <div>
        <Word>닉네임</Word>은 무엇인가요?
      </div>
    </>
  );
};
export const Word = styled.span`
  color: #ff8836;
`;

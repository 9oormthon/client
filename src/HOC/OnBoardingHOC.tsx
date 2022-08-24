import { useHandleInput, useOnBoardSlider } from '@Hooks/useOnBoard';
import styled from 'styled-components';
import '@Common/Style/Slide.css';

type Props = {
  storageKey: 'years' | 'id';
  text: string;
};
export const OnBoardingHOC = ({ storageKey, text }: Props) => {
  const { ref, inputRef } = useOnBoardSlider();
  const handleChange = useHandleInput(inputRef, storageKey);

  return (
    <div ref={ref} className="slideDown">
      <div>{text}</div>
      <Input type="text" ref={inputRef} onKeyDown={handleChange} />
    </div>
  );
};

const Container = styled.div`
  /* transform: */
`;
const Input = styled.input`
  border-bottom: 1px solid black;
`;

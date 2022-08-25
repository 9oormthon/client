import { useState } from 'react';

type Modal = '숫자만 입력해주세요' | '이미 존재하는 닉네임입니다.' | null;

export const useValidationModal = (storageKey: 'years' | 'id') => {
  const [modal, setModal] = useState<Modal>(null);
  const handleModal = () =>
    setModal(storageKey === 'years' ? '숫자만 입력해주세요' : '이미 존재하는 닉네임입니다.');
  const closeModal = () => setModal(null);
  return { modal, handleModal, closeModal };
};

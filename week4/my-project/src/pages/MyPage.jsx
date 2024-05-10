import React from 'react';
import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const MyPage = () => {
  const [showModal, setShowModal] = useState(false);
  // 모달을 닫는 함수
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <MyPageStyled>
      <p>ID</p>
      <p>닉네임</p>
      <p>전화번호</p>
      <button onClick={() => setShowModal(true)}>비밀번호 변경</button>
      {showModal && (
        <div>
          <p>기존 비밀번호</p>
          <input type="text" />
          <p>새로운 비밀번호</p>
          <input type="text" />
          <p>비밀번호 확인</p>
          <input type="text" />
          <button onClick={closeModal}>비밀번호 변경</button>
        </div>
      )}

      <Link to="/">
        <button>홈으로</button>
      </Link>
    </MyPageStyled>
  );
};

export default MyPage;

const MyPageStyled = styled.div``;

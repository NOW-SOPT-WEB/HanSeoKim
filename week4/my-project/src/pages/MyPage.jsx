import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const MyPage = () => {
  return (
    <myPageStyled>
      <p>ID</p>
      <p>닉네임</p>
      <p>전화번호</p>
      <div>
        <p>비밀번호 변경</p>
        <p>기존 비번</p>
        <input type="text" />
        <p>새로운 비번</p>
        <input type="text" />
        <p>비밀번호 확인</p>
        <input type="text" />
        <button>비밀번호 변경</button>
      </div>
      <Link to="/">
        <button>홈으로</button>
      </Link>
    </myPageStyled>
  );
};

export default MyPage;

const myPageStyled = styled.div``;

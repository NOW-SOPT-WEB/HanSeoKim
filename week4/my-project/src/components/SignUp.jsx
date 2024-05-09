import React from 'react';
import styled from 'styled-components';
import LogIn from './LogIn';

const SignUp = () => {
  return (
    <SignUpStyled>
      <h1>회원가입 페이지</h1>
      <p>ID </p>
      <input type="text" />
      <p>PW </p>
      <input type="text" />
      <p>닉네임 </p>
      <input type="text" />
      <p>전화번호 </p>
      <input type="text" />
      <button>회원가입</button>
      <button>뒤로가기</button>
    </SignUpStyled>
  );
};

export default SignUp;

const SignUpStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 50%;
`;

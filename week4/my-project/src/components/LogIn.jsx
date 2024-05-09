import React from 'react';
import styled from 'styled-components';
import SignUp from './SignUp';

const LogIn = () => {
  return (
    <LogInStyled>
      <h1>Login</h1>
      <p>ID </p>
      <input type="text" />
      <p>PW </p>
      <input type="text" />
      <button>로그인</button>
      <button>회원가입</button>
    </LogInStyled>
  );
};

export default LogIn;

const LogInStyled = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  height: 50%;
  flex-direction: column;
`;

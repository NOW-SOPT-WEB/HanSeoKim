import React from 'react';
import styled from 'styled-components';
import SignUp from './SignUp';
import { Link } from 'react-router-dom';

const LogIn = (props) => {
  return (
    <LogInStyled>
      <h1>Login</h1>
      <img src={props.src}></img>
      <p>ID </p>
      <input type="text" />
      <p>PW </p>
      <input type="text" />
      <button>로그인</button>
      <Link to="/signup">
        <button>회원가입</button>
      </Link>
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
  img {
    width: 50%;
  }
`;

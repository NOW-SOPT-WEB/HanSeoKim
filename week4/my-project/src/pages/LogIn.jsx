import React, { useState } from 'react';
import styled from 'styled-components';
import SignUp from './SignUp';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

import { useParams } from 'react-router-dom';

const base_URL = 'http://34.64.233.12:8080';

const LogIn = (props) => {
  const { id } = useParams();
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://34.64.233.12:8080/member/login', {
        authenticationId: userId,
        password: userPw,
      });
      const memberId = response.headers.location;
      alert(response.data.message);
      navigate('/');
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <LogInStyled>
      <h1>Login</h1>
      <img src={props.src}></img>
      <p>ID </p>
      <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
      <p>PW </p>
      <input type="text" value={userPw} onChange={(e) => setUserPw(e.target.value)} />
      <button onClick={handleLogin}>로그인</button>
      <Link to="/join">
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

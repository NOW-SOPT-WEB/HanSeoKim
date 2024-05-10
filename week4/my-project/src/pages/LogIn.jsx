import React, { useState } from 'react';
import styled from 'styled-components';
import SignUp from './SignUp';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

import { useParams } from 'react-router-dom';

const base_URL = 'http://34.64.233.12:8080';

const LogIn = (props) => {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [error, setError] = useState(null);

  const submitForm = async () => {
    try {
      const postData = await axios.post(`${base_URL}/member/login`, {
        userId: userId,
        userPw: userPw,
      });

      if (postData.status === 200) {
        const memberId = response.headers.location;
        alert('로그인이 완료되었습니다. memberId: ' + memberId);
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else if (error.request) {
        // 요청을 보냈지만 응답을 받지 못한 경우
        setError('서버와의 통신에 문제가 발생했습니다.');
      } else {
        // 요청을 보내기 전에 발생한 오류
        setError('요청을 보내는 중 오류가 발생했습니다.');
      }
    }

    alert(JSON.stringify(postData));
  };

  return (
    <LogInStyled>
      <h1>Login</h1>
      <img src={props.src}></img>
      <p>ID </p>
      <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
      <p>PW </p>
      <input type="text" value={userPw} onChange={(e) => setUserPw(e.target.value)} />
      <button onClick={submitForm}>로그인</button>
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

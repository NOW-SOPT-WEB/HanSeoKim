import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const baseURL = 'http://34.64.233.12:8080';

const SignUp = () => {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [userName, setName] = useState('');
  const [number, setNumber] = useState('');

  const navigate = useNavigate();

  const submitBtn = async () => {
    try {
      const response = await axios.post(`${baseURL}/member/join`, {
        authenticationId: userId,
        password: userPw,
        nickname: userName,
        phone: number,
      });
      navigate('/login');
      alert(response.data.message);
      return response.data;
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <SignUpStyled>
      <h1>회원가입 페이지</h1>
      <p>ID </p>
      <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
      <p>PW </p>
      <input type="text" value={userPw} onChange={(e) => setUserPw(e.target.value)} />
      <p>비밀번호 형식은 8자 이상, 숫자, 특수문자, 영어 알파벳이 포함되어야 합니다.</p>
      <p>닉네임 </p>
      <input type="text" value={userName} onChange={(e) => setName(e.target.value)} />
      <p>전화번호 </p>
      <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
      <p>전화번호 형식은 010-****-****입니다. </p>
      <button type="button" onClick={submitBtn}>
        회원가입
      </button>
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

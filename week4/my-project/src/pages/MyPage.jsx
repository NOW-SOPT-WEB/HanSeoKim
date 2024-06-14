import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
const base_URL = 'http://34.64.233.12:8080';

const MyPage = () => {
  const { memberId } = useParams();
  const [user, setUser] = useState({});
  const [nowPw, setNowPw] = useState('');
  const [newPw, setNewPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggleModal = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    const userData = async () => {
      try {
        const response = await axios.get(`${base_URL}/member/info`, {
          headers: { memberId: memberId },
        });
        setUser(response.data);
        console.log(response.data);
      } catch (e) {
        alert(e.response.data.message);
      }
    };
    userData();
  }, [memberId]);

  const handleSubmit = async () => {
    if (!nowPw || !newPw || !confirmPw) {
      alert('빈 칸 입력해주세요!');
      return;
    }
    try {
      const pwData = await axios.patch(
        `${base_URL}/member/password`,
        {
          previousPassword: nowPw,
          newPassword: newPw,
          newPasswordVerification: confirmPw,
        },
        {
          headers: { memberId },
        },
      );
      console.log(pwData);
      alert(pwData.data.message);
      navigate(`/login`);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <MyPageStyled>
      <p>ID : {user.data?.authenticationId}</p>
      <p>닉네임 : {user.data?.nickname} </p>
      <p>전화번호 : {user.data?.phone}</p>
      <span onClick={() => toggleModal()}>▾ 비밀번호 변경</span>
      <ToggleWrapper>
        <div className={isOpen ? 'show-modal' : 'close-modal'}>
          <p>기존 비밀번호</p>
          <input type="text" value={nowPw} onChange={(e) => setNowPw(e.target.value)} />
          <p>새로운 비밀번호</p>
          <input type="text" value={newPw} onChange={(e) => setNewPw(e.target.value)} />
          <p>비밀번호 확인</p>
          <input type="text" value={confirmPw} onChange={(e) => setConfirmPw(e.target.value)} />
          <button onClick={handleSubmit}>비밀번호 변경</button>
        </div>
      </ToggleWrapper>

      <button onClick={() => navigate(`/main/${memberId}`)}>홈으로</button>
    </MyPageStyled>
  );
};

export default MyPage;

const MyPageStyled = styled.div`
  span {
    color: blue;
  }
`;

const ToggleWrapper = styled.div`
  .show-modal {
    display: block;
  }
  .close-modal {
    display: none;
  }
`;

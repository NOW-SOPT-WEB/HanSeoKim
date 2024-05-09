import React from 'react';
import styled from 'styled-components';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Main from './pages/Main';
import MyPage from './pages/MyPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main src="src/assets/main.png" />}></Route>
        <Route path="/login" element={<LogIn src="src/assets/login.png" />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

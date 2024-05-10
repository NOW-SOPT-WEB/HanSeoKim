import React from 'react';
import styled from 'styled-components';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import MyPage from './pages/MyPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogIn from './pages/LogIn';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main src="src/assets/main.png" />}></Route>
        <Route path="/login" element={<LogIn src="src/assets/login.png" />}></Route>
        <Route path="/info" element={<MyPage />}></Route>
        <Route path="/join" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

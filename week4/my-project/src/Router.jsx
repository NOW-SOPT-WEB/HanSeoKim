import React from 'react';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import MyPage from './pages/MyPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogIn from './pages/LogIn';
import MainImage from './assets/main.png';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main/:memberId" element={<Main src={MainImage} />}></Route>
        <Route path="/login" element={<LogIn src="src/assets/login.png" />}></Route>
        <Route path="/mypage/:memberId" element={<MyPage />}></Route>
        <Route path="/join" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

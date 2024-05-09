import { useState } from 'react';
// import image from './assets/login.png';
import image from './assets/main.png';
import React from 'react';
// import styled from 'styled-components';
// import LogIn from './components/LogIn';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
// import Router from './Router';
import Router from './Router';
import MyPage from './pages/MyPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router></Router>
    </>
  );
}

export default App;

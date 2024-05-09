import { useState } from 'react';

import React from 'react';
import styled from 'styled-components';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
// import Router from './Router';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LogIn></LogIn>
      <SignUp></SignUp>
    </>
  );
}

export default App;

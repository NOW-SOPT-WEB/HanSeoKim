import styled from 'styled-components';
// import LogIn from './components/LogIn';
// import SignUp from './components/SignUp';

const Main = (props) => {
  return (
    <MainStyled>
      <img src={props.src}></img>
      <button>My Page</button>
      <button>회원가입</button>
    </MainStyled>
  );
};

export default Main;

const MainStyled = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 20rem;
    height: 30rem;
  }
`;

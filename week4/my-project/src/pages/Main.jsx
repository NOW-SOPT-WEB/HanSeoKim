import styled from 'styled-components';
// import LogIn from './components/LogIn';
// import SignUp from './components/SignUp';
import { Link } from 'react-router-dom';
const Main = (props) => {
  return (
    <MainStyled>
      <img src={props.src}></img>
      <Link to="/mypage">
        <button>My Page</button>
      </Link>
      <Link to="/signup">
        <button>회원가입</button>
      </Link>
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

import styled from 'styled-components';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Main = (props) => {
  const navigate = useNavigate();
  const { memberId } = useParams();
  return (
    <MainStyled>
      <img src={props.src}></img>
      <button onClick={() => navigate(`/mypage/${memberId}`)}>My Page</button>
      <Link to="/join">
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
  button {
    width: 5rem;
  }
`;

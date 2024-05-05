import styled from "styled-components";
import theme from "../styles/theme";

const ButtonStyled = styled.button`
  cursor: pointer;
  border: 0px;
  border-radius: 0.5rem;
  padding: 0.8rem;
  background-color: ${({ theme }) => theme.colors.pink};
  color: ${({ theme }) => theme.colors.white};
`;

const ResetBtn = ({ shuffleCards }) => {
  return <ButtonStyled onClick={shuffleCards}>RESTART</ButtonStyled>;
};
export default ResetBtn;

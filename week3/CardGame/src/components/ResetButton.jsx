import styled from "styled-components";
import theme from "../styles/theme";

const ResetButton = () => {
  return <Btn>RESET</Btn>;
};
export default ResetButton;

const Btn = styled.button`
  position: fixed;
  right: 2rem;
  top: 1rem;
  border: 0px;
  padding: 0.8rem;
  background-color: ${({ theme }) => theme.colors.pink};
  color: ${({ theme }) => theme.colors.white};
`;

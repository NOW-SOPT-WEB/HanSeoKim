import styled from "styled-components";
import theme from "../styles/theme";

const ModeStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 2rem;
  & > button {
    width: 10rem;
    cursor: pointer;
    border: 0px;
    border-radius: 0.5rem;
    padding: 0.8rem;
    background-color: ${({ theme }) => theme.colors.pink};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const NormalMode = styled.button``;
const EasyMode = styled.button``;
const HardMode = styled.button``;

const SelectMode = () => {
  return (
    <ModeStyled>
      <EasyMode>EASY</EasyMode>
      <NormalMode>NORMAL</NormalMode>
      <HardMode>HARD</HardMode>
    </ModeStyled>
  );
};

export default SelectMode;

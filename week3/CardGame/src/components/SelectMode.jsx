import styled from "styled-components";
import theme from "../styles/theme";

const ModeStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1rem;

  & > button {
    width: 10rem;
    cursor: pointer;
    border: 0px;
    border-radius: 0.5rem;
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.pink};
    color: ${({ theme }) => theme.colors.white};
    margin: 1rem;
  }
`;

const NormalMode = styled.button``;
const EasyMode = styled.button``;
const HardMode = styled.button``;

const SelectMode = ({ selectMode }) => {
  return (
    <ModeStyled>
      <EasyMode onClick={() => selectMode("easy")}>EASY</EasyMode>
      <NormalMode onClick={() => selectMode("normal")}>NORMAL</NormalMode>
      <HardMode onClick={() => selectMode("hard")}>HARD</HardMode>
    </ModeStyled>
  );
};

export default SelectMode;

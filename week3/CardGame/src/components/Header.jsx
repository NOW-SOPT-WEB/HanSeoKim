import styled from "styled-components";
import theme from "../styles/theme";

import ResetBtn from "../components/ResetButton";

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.gray};
`;

const Header = ({ matchCards, cards, shuffleCards }) => {
  return (
    <HeaderStyle>
      <h1>🐥 Card Game 🐥</h1>
      <p>
        SCORE : {matchCards} / {cards.length / 2}
      </p>
      <ResetBtn shuffleCards={shuffleCards}></ResetBtn>
    </HeaderStyle>
  );
};

export default Header;

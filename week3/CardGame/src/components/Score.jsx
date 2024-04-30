import styled from "styled-components";
import theme from "../styles/theme";
import { cardItem } from "../data/data";

const Score = () => {
  return <ScoreP>Score : </ScoreP>;
};

export default Score;
const ScoreP = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.black};
  margin-left: 3rem;
`;

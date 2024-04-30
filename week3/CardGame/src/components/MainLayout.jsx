import styled from "styled-components";
import theme from "../styles/theme";
import ResetButton from "./ResetButton";
import { cardItem } from "../data/data";
import SingleCard from "./SingleCard";
import Score from "./Score";

const MainLayout = () => {
  return (
    <LayoutWrapper>
      <Header.MainHeader>
        <Header.HeaderTitle>🐥 Card Game 🐥</Header.HeaderTitle>
        <ResetButton></ResetButton>
      </Header.MainHeader>
      <Score>Score : </Score>
      <ContentsWrap>
        <MainContents></MainContents>
      </ContentsWrap>
    </LayoutWrapper>
  );
};

export default MainLayout;

const MainContents = () => {
  return cardItem.map((card) => (
    <SingleCard key={card.id} src={card.url}></SingleCard>
  ));
};

const LayoutWrapper = styled.div`
  height: 100vh;
  width: 1512px;
  background-color: ${({ theme }) => theme.colors.gray};
  display: flex;
  flex-direction: column;
`;

const Header = {
  MainHeader: styled.header`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 1512px;
    background-color: ${({ theme }) => theme.colors.gray};
    height: 4rem;
  `,
  HeaderTitle: styled.h1`
    font-size: 2rem;
  `,
};

const ContentsWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 1500px;
  justify-content: center;
  flex-wrap: wrap;
`;

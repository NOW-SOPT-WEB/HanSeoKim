import { useState, useEffect } from "react";
import { ThemeProvider, styled } from "styled-components";
import { cardImages } from "./data/card";
import theme from "./styles/theme";
import ResetBtn from "./components/ResetButton";
import Card from "./components/CardSection";
import SelectMode from "./components/SelectMode";
const LayoutWrapper = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.gray};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.gray};
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.gray};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: ${(props) => props.theme.colors.white};
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 20rem;
`;

const MainContents = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [cardOne, setcardOne] = useState(null);
  const [cardTwo, setcardTwo] = useState(null);
  const [matchCards, setmatchCards] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    shuffleCards();
  }, []);

  //선택한 카드가 일치하는지 확인
  useEffect(() => {
    if (cardOne && cardTwo) {
      if (cardOne.src === cardTwo.src) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.src === cardOne.src ? { ...card, matched: true } : card
          )
        );
        setmatchCards((prev) => prev + 1);
        setTimeout(() => resetTurn(), 1000);
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [cardOne, cardTwo]);

  //모달 보이기
  useEffect(() => {
    if (matchCards === 5) {
      setShowModal(true);
    }
  }, [matchCards]);

  //카드 섞기
  const shuffleCards = () => {
    const selectedCardImages = [...cardImages]
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);

    const shuffledCards = [...selectedCardImages, ...selectedCardImages]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, id: index, flipped: false }));

    // 게임 초기화
    setcardOne(null);
    setcardTwo(null);
    setmatchCards(0);
    setCards(shuffledCards);
    setTurns(0);
    setShowModal(false);
  };

  const resetTurn = () => {
    setcardOne(null);
    setcardTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  const selectCards = (card) => {
    cardOne ? setcardTwo(card) : setcardOne(card);
  };

  return (
    <ThemeProvider theme={theme}>
      <LayoutWrapper>
        <Header>
          <h1>🐥 Card Game 🐥</h1>
          <p>
            SCORE : {matchCards} / {cards.length / 2}
          </p>
          <ResetBtn shuffleCards={shuffleCards}></ResetBtn>
        </Header>
        <SelectMode></SelectMode>
        <MainContents>
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              selectCards={selectCards}
              flipped={card === cardOne || card === cardTwo || card.matched}
            />
          ))}
        </MainContents>
        {showModal && (
          <Modal>
            <ModalContent>
              <p>🎊축하합니다!🎊</p>
              <ResetBtn shuffleCards={shuffleCards}></ResetBtn>
            </ModalContent>
          </Modal>
        )}
      </LayoutWrapper>
    </ThemeProvider>
  );
}

export default App;

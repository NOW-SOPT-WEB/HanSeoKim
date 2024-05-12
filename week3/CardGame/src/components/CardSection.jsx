import styled from "styled-components";
import theme from "../styles/theme";

const CardStyled = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;

  & > div {
    object-fit: cover;
    width: 10rem;
    height: 12rem;
    border-radius: 1rem;
    transform-style: preserve-3d;
    transition: transform 0.5s;
    padding: 1rem;
  }
`;

const CardInner = styled.div`
  transform: ${(props) => (props.flipped ? "rotateY(180deg)" : "none")};
`;

const CardWrap = styled.img`
  backface-visibility: hidden;
  position: absolute;
  object-fit: cover;
  width: 10rem;
  height: 12rem;
  border-radius: 1rem;
`;

const CardBack = styled(CardWrap)`
  background: ${(props) => props.theme.colors.black};
`;

const CardFront = styled(CardWrap)`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotateY(180deg);
`;

function Card({ card, selectCards, flipped }) {
  return (
    <CardStyled onClick={() => selectCards(card)}>
      <CardInner flipped={flipped}>
        <CardFront src={card.src} />
        <CardBack></CardBack>
      </CardInner>
    </CardStyled>
  );
}

export default Card;

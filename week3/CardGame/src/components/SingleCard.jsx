import styled from "styled-components";
import theme from "../styles/theme";
import { cardItem } from "../data/data";

const SingleCard = (props) => {
  // <Card src={item.url}

  return <CardImg src={props.src} />;
};

export default SingleCard;

const CardImg = styled.img`
  object-fit: cover;
  width: 10rem;
  height: 12rem;
  border-radius: 1rem;
  margin: 1rem;
`;

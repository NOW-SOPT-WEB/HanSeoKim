import React from "react";
import { css } from "@emotion/react";

const BoxWrapperStyle = css({
  marginTop: "5rem",
  backgroundColor: "#F9E8ED",
  height: "30rem",
  width: "60rem",
  borderRadius: "5%",
});

const ContentsBoxStyle = css`
  display: flex;
  justify-content: center;
  height: 15rem;
  width: 20rem;
  margin-right: 2rem;
  border-radius: 5%;
  border: 1px solid gray;
  background-color: #f9f2f9;
  cursor: pointer;

  &:hover {
    background-color: #fabac4;
    color: white;
  }
`;
const ContentsText = css({
  display: "flex",
  justifyContent: "center",
  fontSize: "20px",
  color: "#F59A81",
  marginTop: "2rem",
  marginBottom: "3rem",
});

const alignBoxes = css({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
});

export { BoxWrapperStyle, ContentsBoxStyle, ContentsText, alignBoxes };

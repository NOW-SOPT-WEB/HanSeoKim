/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import React from "react";
import { css } from "@emotion/react";

const BoxWrapperStyle = css({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  marginTop: "5rem",
  backgroundColor: "#F9E8ED",
  height: "28rem",
  width: "52rem",
  borderRadius: "5%",
});

const ContentsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const ContentsBoxStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  height: 15rem;
  width: 20rem;
  margin-right: 2rem;
  border-radius: 5%;
  border: 1px solid gray;
  background-color: ${(props) => (props.isClicked ? "#fabac4" : "#f9f2f9")};
  color: ${(props) => (props.isClicked ? "white" : "black")};
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

export {
  BoxWrapperStyle,
  ContentsBoxStyle,
  ContentsText,
  ContentsWrapper,
  alignBoxes,
};

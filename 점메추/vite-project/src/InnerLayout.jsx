/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { useEffect } from "react";
import { css } from "@emotion/react";
import { Children } from "react";
import { ContentsText } from "./components/@common/ContentsBox/ContentsBox.style";
import { alignBoxes } from "./components/@common/ContentsBox/ContentsBox.style";
import { ContentsBox } from "./components/@common/ContentsBox/ContentsBox";
import { MENUS } from "./data/CATEGORY";
import NextBtn from "./components/@common/Button/Button";

const InnerLayout = () => {
  const [isSelect, setIsSelect] = useState("");

  const Taste = () => {
    return (
      <>
        <ContentsBox>
          <p>취향대로 추천!</p>
        </ContentsBox>
        <NextBtn>Start!</NextBtn>
      </>
    );
  };

  const Random = () => {
    return (
      <>
        <ContentsBox>
          <p>랜덤 추천!</p>
        </ContentsBox>
        <NextBtn>Start!</NextBtn>
      </>
    );
  };

  return (
    <>
      {!isSelect ? (
        <>
          <p css={ContentsText}>원하는 추천 방식을 골라줘!</p>
          <div css={alignBoxes}>
            <ContentsBox onClick={() => setIsSelect(MENUS[0].category)}>
              <p>취향대로 추천!</p>
            </ContentsBox>
            <ContentsBox onClick={() => setIsSelect(MENUS[1].category)}>
              <p>랜덤 추천!</p>
            </ContentsBox>
          </div>
        </>
      ) : null}
      {isSelect === MENUS[0].category && <Taste />}
      {isSelect === MENUS[1].category && <Random />}
    </>
  );
};

export default InnerLayout;

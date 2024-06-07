/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { ContentsBoxStyle, BoxWrapperStyle } from "./ContentsBox.style";

const BoxWrapper = () => {
  return (
    <>
      <div css={BoxWrapperStyle}></div>
    </>
  );
};

const ContentsBox = () => {
  return (
    <>
      <div css={ContentsBoxStyle}></div>
    </>
  );
};

export { BoxWrapper, ContentsBox };

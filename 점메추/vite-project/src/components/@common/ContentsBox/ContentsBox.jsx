/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import {
  ContentsBoxStyle,
  BoxWrapperStyle,
  ContentsWrapper,
} from "./ContentsBox.style";
import { Children } from "react";

const BoxWrapper = ({ children }) => {
  return (
    <>
      <div css={BoxWrapperStyle}>{children}</div>
    </>
  );
};

const ContentsBox = ({ onClick, children }) => {
  return <ContentsBoxStyle onClick={onClick}>{children}</ContentsBoxStyle>;
};

export { BoxWrapper, ContentsBox };

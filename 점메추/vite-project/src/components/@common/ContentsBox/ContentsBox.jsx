/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { ContentsBoxStyle, BoxWrapperStyle } from "./ContentsBox.style";
import { Children } from "react";

const BoxWrapper = ({ children }) => {
  return (
    <>
      <div css={BoxWrapperStyle}>{children}</div>
    </>
  );
};

const ContentsBox = ({ onClick, children }) => {
  return (
    <>
      <div onClick={onClick} css={ContentsBoxStyle}>
        {children}
      </div>
    </>
  );
};

export { BoxWrapper, ContentsBox };

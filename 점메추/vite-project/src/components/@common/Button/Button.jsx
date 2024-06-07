/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { Children } from "react";
import { btnStyle } from "./Button.style";

const NextBtn = ({ children }) => {
  return <button css={btnStyle}>{children}</button>;
};

export default NextBtn;

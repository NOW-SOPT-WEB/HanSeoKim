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
import { FirstStep } from "./components/step/firstStep";
import { Result } from "./components/step/Result";

const InnerLayout = ({ step, setStep }) => {
  console.log("스텝: ", step);
  switch (step) {
    case 0:
      return (
        <>
          <FirstStep setStep={setStep}></FirstStep>
        </>
      );

    case 4:
      return (
        <>
          <Result setStep={setStep}></Result>
        </>
      );
  }
};

export default InnerLayout;

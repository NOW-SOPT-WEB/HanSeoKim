/** @jsxImportSource @emotion/react */
import Header from "./components/@common/Header/Header";
import { btnStyle } from "./components/@common/Button/Button.style";
import { BoxWrapper } from "./components/@common/ContentsBox/ContentsBox";
import NextBtn from "./components/@common/Button/Button";
import { mainStyle } from "./MainLayout.style";
import { ContentsText } from "./components/@common/ContentsBox/ContentsBox.style";
import { ContentsBox } from "./components/@common/ContentsBox/ContentsBox";
import { alignBoxes } from "./components/@common/ContentsBox/ContentsBox.style";
import InnerLayout from "./InnerLayout";
import { useState } from "react";
import { useEffect } from "react";

const MainLayout = () => {
  const [step, setStep] = useState(0);
  return (
    <div css={mainStyle}>
      <Header></Header>
      <BoxWrapper>
        <InnerLayout step={step} setStep={setStep}></InnerLayout>
      </BoxWrapper>
    </div>
  );
};
export default MainLayout;

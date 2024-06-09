/** @jsxImportSource @emotion/react */
import Header from "./components/@common/Header/Header";
import { BoxWrapper } from "./components/@common/ContentsBox/ContentsBox";
import { mainStyle } from "./MainLayout.style";
import InnerLayout from "./InnerLayout";
import { useState } from "react";

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
